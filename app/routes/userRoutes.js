const express = require('express');
const router = express.Router();
const MongoDB = require('../config/MongoDB');
const userSchema = require('../schemas/userSchemas.js')
const Context = require('../config/contextStrategy/contextStrategy.js')
let context = new Context(new MongoDB(userSchema))
const getConnection = require('../config/connection')
const connection = new getConnection()

router.post('/cadastrar', async (req, res) => {
  try {
    await connection.connect();

    const novoUsuario = await context.create(req.body);

    res.json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

router.get('/usuarios', async (req, res) => {
  try {
    await connection.connect();

    const { email, passoword } = req.query;

    if (!email || !!passoword) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" })
    }

    const result = await context.read({ email, passoword })
    
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler banco de dados' })
  }
})
// Configure outras rotas para read, update e delete aqui...

module.exports = router;
