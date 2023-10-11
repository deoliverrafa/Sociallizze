const express = require('express');
const router = express.Router();
const MongoDB = require('../config/MongoDB');
const userSchema = require('../schemas/userSchemas.js')
const Context = require('../config/contextStrategy/contextStrategy.js')
let context = new Context(new MongoDB(userSchema))
const getConnection = require('../config/connection');
const connection = new getConnection()
const bcrypt = require('bcrypt');

// Rota para cadastrar usuário
router.post('/cadastrar', async (req, res) => {
  try {
    await connection.connect();

    const { nickName, userName, phoneNumber, email, password, birthDayData } = req.body;

    if (!nickName || !userName || !phoneNumber || !email || !password || !birthDayData) {
      res.status(400).json({ error: 'Prenncha tudo Corretamente' });
    } else {

      const encriptedPass = await bcrypt.hash(password, 5,)

      const objectToCad = { nickName, userName, phoneNumber, email, password: encriptedPass, birthDayData };

      // cria usuário com as requisições passadas
      const novoUsuario = await context.create(objectToCad);

      res.json(novoUsuario);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// rota para get de usuários passando o parâmetro email e senha
router.get('/usuarios', async (req, res) => {
  try {
    await connection.connect();

    // Obtém o email e senha da query
    const { email, password } = req.query;

    // Condicional para verificar se os parâmetros obrigatórios foram passados
    if (!email || !password) {
      return res.status(400).json({ error: "E-mail e senha são obrigatórios." });
    }

    // Busca o usuário no banco de dados com base no email
    const result = await context.read({ email });

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
          return res.status(401).json({ error: "E-mail ou senha incorretos. Tente novamente." });
        }
      });
    } else {
      // Nenhum usuário encontrado com esse email
      return res.status(404).json({ error: "E-mail ou senha incorretos. Tente novamente." });
    }
  } catch (error) {
    // Em caso de erro ao ler o banco de dados
    res.status(500).json({ error: 'Erro ao ler banco de dados.' });
  }
});

module.exports = router;