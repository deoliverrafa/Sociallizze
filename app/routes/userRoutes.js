const express = require('express');
const router = express.Router();
const MongoDB = require('../config/MongoDB');
const userSchema = require('../schemas/userSchemas.js')
const Context = require('../config/contextStrategy/contextStrategy.js')
const context = new Context(new MongoDB(userSchema))
const getConnection = require('../config/connection');
const connection = new getConnection()
const bcrypt = require('bcrypt');
const multer = require('multer')
const validator = require('validator')
const exif = require('exif').ExifImage

// Rota para cadastrar usuário
router.post('/cadastrar', async (req, res) => {
  try {
    await connection.connect();

    const { nickName, userName, phoneNumber, email, password, birthDayData, type, nacionality } = req.body;

    if (!nickName || !userName || !phoneNumber || !email || !password) {
      return res.status(400).json({ error: 'Preencha tudo Corretamente' });
    }

    let isValidEmail = validator.isEmail(email)
    if (isValidEmail == false) {
      return res.status(400).json({ error: 'Insira um email válido' });
    }

    // Verificar se o email, phoneNumber e nickName já estão em uso
    const existingUserWithEmail = await context.read({ email });
    const existingUserWithPhoneNumber = await context.read({ phoneNumber });
    const existingUserWithNickName = await context.read({ nickName });

    if (existingUserWithEmail.length > 0) {
      return res.status(400).json({ error: 'Email já está em uso.' });
    }

    if (existingUserWithPhoneNumber.length > 0) {
      return res.status(400).json({ error: 'Número de Telefone já está em uso.' });
    }

    if (existingUserWithNickName.length > 0) {
      return res.status(400).json({ error: 'Nome de Usuário já está em uso.' });
    }

    const encriptedPass = await bcrypt.hash(password, 5);

    const objectToCad = { nickName, userName, phoneNumber, email, password: encriptedPass, birthDayData, type, nacionality };

    // cria usuário com as requisições passadas
    const novoUsuario = await context.create(objectToCad);

    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// rota para get de usuários passando o parâmetro email e senha
router.get('/login', async (req, res) => {
  try {
    await connection.connect();

    // Obtém o email e senha da query
    const { email, password } = req.query;

    // Condicional para verificar se os parâmetros obrigatórios foram passados
    if (!email || !password) {
      return res.status(400).json({ error: "E-mail e senha são obrigatórios." });
    }

    // Busca o usuário no banco de dados com base no email ou no nick ou no phoneNumber
    let result = await context.read({ email });

    if (result.length === 0) {
      const secondTry = await context.read({ nickName: email })
      result = secondTry;
    }

    // Verifica se o resultado não é nulo e se há pelo menos um usuário encontrado com esse email
    if (result.length === 1) {
      const user = result[0];

      // Compara a senha fornecida com a senha criptografada no banco de dados
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao comparar senhas.' });
        }

        if (passwordMatch) {
          // Senhas coincidem, o usuário está autenticado
          return res.json(user);
        } else {
          // Senha incorreta
          return res.status(401).json({ error: "E-mail ou senha incorretos" });
        }
      });
    } else {
      // Nenhum usuário encontrado com esse email
      return res.status(404).json({ error: "E-mail ou senha incorretos" });
    }
  } catch (error) {
    // Em caso de erro ao ler o banco de dados
    res.status(500).json({ error: 'Erro ao ler banco de dados' });
  }
});

// PESQUISA E RETORNA OS DADOS PEDIDO DE UM USUÁRIO
router.get('/searchById', async (req, res) => {
  try {
    await connection.connect();

    const { id, fields } = req.query;

    const primaryResult = await context.read({ _id: id });
    const result = primaryResult[0];

    if (!result) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verifica se o parâmetro 'fields' está presente e não está vazio
    if (fields && fields.trim() !== '') {
      // Converte o documento Mongoose para um objeto JavaScript comum
      const userObject = result.toObject();

      // Converte a string de campos em um array
      const requestedFields = fields.split(',');

      // Cria um objeto para armazenar somente os campos solicitados
      const filteredResult = {};

      // Itera sobre os campos solicitados e os adiciona ao objeto de resultado filtrado
      requestedFields.forEach(field => {
        if (userObject.hasOwnProperty(field)) {
          filteredResult[field] = userObject[field];
        }
      });
      return res.json(filteredResult);
    }

    res.json(result.toObject());
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
});

// Rota para pegar imagem de perfil do usuário
router.get('/getUserImage', async (req, res) => {
  try {
    await connection.connect();

    const { userId } = req.query;

    if (!userId) {
      return res.status(404).json({ error: "Id necessário" });
    }

    const [user] = await context.read({ _id: userId });

    if (!user || !user.avatar || !user.avatar.image) {
      return res.status(404).json({ error: "Imagem de usuário não encontrada" });
    }

    const contentType = user.avatar.contentType;

    res.set('Content-Type', contentType);
    res.send(user.avatar.image);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Erro na solicitação" });
  }
});

const storage = multer.memoryStorage(); // Usando memoryStorage para armazenar o arquivo como um buffer na memória

const upload = multer({ storage: storage });

// Rota para atualizar os Dados do Usuário
const sharp = require('sharp');

// Atualiza a Imagem de perfil do usuário
router.put('/attProfilePhoto', upload.single('avatar'), async (req, res) => {
  const { userId } = req.body;
  const avatarFile = req.file;

  if (!userId) {
    return res.status(401).json({ error: 'Não autorizado. Faça o login para alterar o perfil.' });
  }

  try {
    await connection.connect();

    const updateData = {}; // Objeto para armazenar os campos que serão atualizados

    if (avatarFile) {
      new exif({ image: avatarFile.buffer }, async function (error, exifData) {
        if (error) {
          console.log('Erro ao ler os metadados EXIF:', error);
        } else {
          const orientation = exifData.image.Orientation;

          // Redimensionar e corrigir a orientação da imagem usando sharp
          const resizedImageBuffer = await sharp(avatarFile.buffer)
            .rotate() // Corrigir a orientação da imagem
            .resize({ width: 500 }) // Redimensionar para largura máxima de 500 pixels
            .toFormat('jpeg') // Converter para JPEG (pode ser outro formato)
            .jpeg({ quality: 50 }) // Ajustar a qualidade do JPEG (valor entre 0 e 100)
            .toBuffer();

          updateData['avatar.image'] = resizedImageBuffer;

          const usuario = await context.update(userId, updateData);

          if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
          }

          return res.status(200).json({ message: 'Imagem de perfil atualizada com sucesso.', usuario });
        }
      });
    } else {
      return res.status(400).json({ error: 'Nenhuma imagem fornecida.' });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro na solicitação' });
  }
});

// ROTA PARA FAZER O UPDATE DA BIO
router.put('/updateBio', async (req, res) => {
  await connection.connect();

  const { bioData, localUserId } = req.body;

  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      localUserId,
      { $set: { bio: bioData } }, // Novos dados a serem atualizados
      { new: true } // Opção 'new' para retornar o documento atualizado
    );
    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(updatedUser); // Retorna o usuário atualizado
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a bio do usuário' });
  }
});

// ROTA PARA GET DO INPUT FRIENDS
router.get('/getUser', async (req, res) => {
  await connection.connect()

  const { nickName } = req.query;

  try {
    // Certificando de que 'nickName' não é undefined ou null
    if (!nickName) {
      return res.status(400).json({ error: 'Parâmetro nickName não fornecido' });
    }

    // Use a função read para encontrar usuários semelhantes com a regex
    const response = await context.read({ nickName: { $regex: new RegExp(nickName, 'i') } });

    if (!response || response.length === 0) {
      return res.json({ message: 'Usuário não encontrado. Tente novamente.' });
    }

    return res.json(response)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


// ROTA PARA SEGUIR USUÁRIO
router.put('/follow', async (req, res) => {
  try {
    await connection.connect();
    // Obtenha o ID do usuário a ser seguido
    const { currentUserId, userIdToFollow } = req.body;

    // Encontra o usuário atual no banco de dados
    const currentUser = await userSchema.findById(currentUserId);

    if (!currentUser || !userIdToFollow) {
      return res.status(404).json({ error: "Usuário não encontrado no Banco de dados" });
    }

    if (currentUser.following.includes(userIdToFollow)) {
      return res.status(404).json({ error: "Você já está seguindo este usuário" });
    }

    // Incrementa em +1 o número de seguidores no usuário a ser seguido
    await context.incrementFollowersCount(currentUserId, userIdToFollow);

    // Adiciona o ID do usuário a ser seguido ao array following
    currentUser.following.push(userIdToFollow);


    // Salva as alterações no banco de dados
    await currentUser.save();

    res.status(200).json({ message: 'Usuário seguido com sucesso!' });
  } catch (error) {
    console.error('Erro ao seguir o usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


// ROTA PARA PEGAR USUARIO ATUAL PELO ID
router.get('/getCurrentUser', async (req, res) => {
  try {
    await connection.connect()
    const { currentUserId } = req.query
    const currentUser = await userSchema.findById(currentUserId);

    if (!currentUser) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(currentUser);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao pegar usuário" })
  }
})

// ROTA PARA DEIXAR DE SEGUIR O USUARIO
router.put('/unfollow', async (req, res) => {
  try {
    const { userIdToUnfollow, currentUserId } = req.body;

    // Lógica para remover o usuário do array 'following'
    await userSchema.findByIdAndUpdate(currentUserId, {
      $pull: { following: userIdToUnfollow },
    });

    await context.decrementFollowersCount(currentUserId, userIdToUnfollow);

    res.status(200).json({ success: true, message: 'Usuário removido com sucesso' });
  } catch (error) {
    console.error('Erro ao remover o usuário:', error);
    res.status(500).json({ success: false, message: 'Erro ao remover o usuário' });
  }
});


// ROTA PARA CONFIGURAR EXIBIÇÃO DE INFORMAÇÕES EM CONFIGURAÇÕES
router.put('/modifySettings', async (req, res) => {

  console.log(req.body);
  const { nacionality, birthDayData, email, phoneNumber, localUserId } = req.body

  await userSchema.findByIdAndUpdate(c)
})

module.exports = router;