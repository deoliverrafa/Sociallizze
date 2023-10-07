const express = require('express')
const router = express.Router()
const messageSchema = require('../schemas/messageSchemas')
const id = require('../models/loginModel')
const authMiddleWare = require('.')

router.post('/enviar', authMiddleware, async (req, res) => {
    try {
      const { recipientId, content } = req.body;
      const senderId = req.user.id; // Assume que você armazenou o ID do remetente no objeto de usuário após a autenticação
  
      // Crie uma nova mensagem
      const newMessage = new messageSchema({
        sender: senderId,
        recipient: recipientId,
        content: content
      });
  
      // Salve a mensagem no banco de dados
      await newMessage.save();
  
      return res.status(201).json({ message: 'Mensagem enviada com sucesso' });
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      return res.status(500).json({ error: 'Erro ao enviar a mensagem' });
    }
  });
  
  module.exports = router;