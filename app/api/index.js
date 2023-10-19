const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('../routes/userRoutes');
const messageRoutes = require('../routes/messageRoutes')
const cors = require('cors');


app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5500', // Substitua pelo endereço real do seu site
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));

app.use('/api', usuarioRoutes);
app.use('/mensagem', messageRoutes)

// Outras configurações e middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});