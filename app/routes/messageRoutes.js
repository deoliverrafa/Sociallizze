const express = require('express');
const router = express.Router();
const Message = require('../schemas/messageSchemas');
const userSchema = require('../schemas/userSchemas')
const mongoose = require('mongoose')
const getConnection = require('../config/connection')
const connection = new getConnection()

router.post('/enviar', async (req, res) => {
    try {
        const { recipient, content, sender } = req.body;

        if (!recipient || !content || !sender) {
            return res.status(500).json({ message: "Argumentos inválidos"})
        }

        const recipientId = new mongoose.Types.ObjectId(recipient);
        const senderId = new mongoose.Types.ObjectId(sender);

        // Crie uma nova mensagem
        const newMessage = new Message({
            senderId,
            recipientId,
            content
        });

        // Salve a mensagem no banco de dados
        await newMessage.save();
        
        // faz um update no usuário que irá receber a mensagem
        await userSchema.findOneAndUpdate({_id: recipientId}, 
            {$push: {messages: newMessage._id}},
            {new: true},
            )

        return res.status(201).json({ message: 'Mensagem enviada com sucesso' });
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
        return res.status(500).json({ error: 'Erro ao enviar a mensagem' });
    }
});


router.get('/show', async (req, res) => {
    try {
        await connection.connect();
        const userId = req.query;

        if(!userId) return res.status(500).json({message: "Id do usuário nescessário"})

        // const mongoID = new mongoose.Types.ObjectId(userId);

        const result = await userSchema.findById({userId})
        .populate('messages').exec()
        .exec((err, usuario) => {
            if (err) {
              console.error("Erro ao obter mensagens",err);
              return;
            }});

        return res.json(result);
    } catch (error) {
        console.error('Erro ao mostrar a mensagem:', error);
        return res.status(500).json({ error: 'Erro ao mostrar a mensagem' });
    }
});


module.exports = router;