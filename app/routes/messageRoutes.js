const express = require('express')
const router = express.Router()
const MongoDB = require('../config/MongoDB')
const Context = require('../config/contextStrategy/contextStrategy')
const messageSchema = require('../schemas/messageSchemas')



router.post('/enviar', authMiddleware, async (req, res) => {
    try {
        console.log(id)
        const {recipientId, content} = req.body
        const senderId = id

    } catch (error) {
        res.status(500).json({error: "Erro ao enviar a mensagem, tente novamente"})
    }
})