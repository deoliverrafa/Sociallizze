const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('../routes/userRoutes');
const messageRoutes = require('../routes/messageRoutes')

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/api', usuarioRoutes);

app.use('/mensagem', messageRoutes)

// Outras configurações e middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
module.exports = app