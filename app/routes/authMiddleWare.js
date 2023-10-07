const jwt = require('jsonwebtoken');

// Função de middleware de autenticação
function authMiddleware(req, res, next) {
  // Recupere o token do cabeçalho da solicitação (ou de outro local onde você o armazenou)
  const token = req.header('Authorization');

  // Verifique se o token está presente
  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação ausente' });
  }

  try {
    // Verifique e decodifique o token usando a chave secreta (que deve ser mantida em segredo)
    const decoded = jwt.verify(token, 'true');

    // O objeto "decoded" conterá informações sobre o usuário (por exemplo, ID do usuário)
    req.user = decoded.user; // Adicione o usuário decodificado ao objeto de solicitação para uso posterior

    // Continue com a próxima função de middleware ou rota
    next();
  } catch (error) {
    console.error('Erro na autenticação:', error);
    return res.status(401).json({ error: 'Token de autenticação inválido' });
  }
}

module.exports = authMiddleware;