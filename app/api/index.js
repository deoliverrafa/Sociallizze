const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('../routes/userRoutes.js');

app.use(bodyParser.json());
app.use('/api', usuarioRoutes);

// Outras configurações e middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});