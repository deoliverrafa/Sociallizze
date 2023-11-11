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

router.get('/searchById', async (req, res) => {
  try {
    await connection.connect()

    const { id } = req.query
    const primaryResult = await context.read({ _id: id })
    const result = primaryResult[0]

    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuario' })
  }
})

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
router.put('/attProfile', upload.single('avatar'), async (req, res) => {
  const { bioData, userId } = req.body;
  const avatarFile = req.file;

  if (!userId) {
    return res.status(401).json({ error: 'Não autorizado. Faça o login para alterar o perfil.' });
  }

  try {
    await connection.connect();

    const updateData = {}; // Objeto para armazenar os campos que serão atualizados

    if (avatarFile) {
      if (avatarFile.mimetype) {
        updateData['avatar.contentType'] = avatarFile.mimetype;
      }
      if (avatarFile.originalname) {
        updateData['avatar.filename'] = avatarFile.originalname;
      }
      if (avatarFile.buffer) {
        updateData['avatar.image'] = avatarFile.buffer;
      }
    }

    if (typeof bioData !== 'undefined') {
      updateData.bio = bioData;
    }

    const usuario = await context.update(userId, updateData);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(200).json({ message: 'Imagem de perfil atualizada com sucesso.', usuario });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro na solicitação' });
  }
});


// ROTA PARA GET DO INPUT FRIENDS
router.get('/getUser', async (req, res) => {
  await connection.connect()

  const { nickName } = req.query;

  try {
      // Certifique-se de que 'nickName' não é undefined ou null
      if (!nickName) {
          return res.status(400).json({ error: 'Parâmetro nickName não fornecido' });
      }

      // Use a função findUSersToFriends corrigida
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

      res.status(200).json({ success: true, message: 'Usuário removido com sucesso' });
  } catch (error) {
      console.error('Erro ao remover o usuário:', error);
      res.status(500).json({ success: false, message: 'Erro ao remover o usuário' });
  }
});

module.exports = router;