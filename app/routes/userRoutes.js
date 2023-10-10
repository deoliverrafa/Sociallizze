const express = require('express');
const router = express.Router();
const MongoDB = require('../config/MongoDB');
const userSchema = require('../schemas/userSchemas.js')
const Context = require('../config/contextStrategy/contextStrategy.js')
let context = new Context(new MongoDB(userSchema))
const getConnection = require('../config/connection');
const connection = new getConnection()


// Rota para cadastrar usuário
// Rota para cadastrar usuário
router.post('/cadastrar', async (req, res) => {
  try { 
    await connection.connect();

    const { nickName, userName, phoneNumber, email, password, birthDayData } = req.body;

    if (!nickName || !userName || !phoneNumber || !email || !password || !birthDayData) {
      res.status(400).json({ error: 'Parâmetros nescessários, tente novamente' });
    } else {
      const objectToCad = { nickName, userName, phoneNumber, email, password, birthDayData };

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
    // get do email e password da query
    const { email, password } = req.query;

    // condicionais para verificação dos parâmetros passados
    if (!email || !password) {
      return res.status(400).json({ error: "E-mail é senha são obrigatórios." });
    }

    // busca no banco de dados através do context
    const result = await context.read({email, password});

    const finalResult = result[0];

    // verifica se resultado não é null e id existe no resultado para retorna o result
    if (result.length === 1) {
      res.json(finalResult);
    } else {
      // retorna uma mensagem de erro de email ou senha incorretos
      return res.status(404).json({ error: "E-mail ou senha incorretos. Tente novamente." });
    }
  } catch (error) {
    // em caso de tudo der errado é repassado essa mensagem de que não conseguiu ler o banco de dados
    res.status(500).json({ error: 'Error ao ler banco de dados.' });
  }
});

// Configure outras rotas para read, update e delete aqui...

module.exports = router;
