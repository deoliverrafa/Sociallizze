const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('../routes/userRoutes.js');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permite solicitações de qualquer origem (não recomendado para produção)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use('/api', usuarioRoutes);

// Outras configurações e middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});