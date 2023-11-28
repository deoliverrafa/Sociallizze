const express = require('express');
const router = express.Router();
const getConnection = require('../config/connection');
const connection = new getConnection()
const postSchema = require('../schemas/postSchema');
const multer = require('multer');

// CONFIGURAÇÃO SIMPLES DO MULTER PARA ARMAZENAMENTO DE IMAGENS
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ROTA PARA CRIAR UMA NOVA POSTAGEM
router.post('/create', upload.array('images', 4), async (req, res) => {
    try {
        await connection.connect();

        const { title, desc } = req.body;
        const images = req.files;

        // Transforma os buffers das imagens em um array de objetos para o modelo de postagem
        const imageObjects = images.map(image => ({
            image: image.buffer,
            fileName: image.originalname,
            contentType: image.mimetype,
        }));

        const newPost = new Post({ title, desc, images: imageObjects });
        await newPost.save();

        res.status(201).json({ message: 'Postagem criada com sucesso', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar postagem', error: error.message });
    }
});

// ROTA PARA FAZER O GET DE TODOS OS POSTS
router.get('/get', async (req, res) => {
    try {
        const posts = await postSchema.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter postagens', error: error.message });
    }
})

// ROTA PARA CASO O USUÁRIO DESEJAR DELETAR SUA PUBLICAÇÃO
router.delete('/delete/post:id', async (req, res) => {

    try {
        const postId = req.params.postId;

        await postSchema.findByIdAndDelete(postId);

        res.status(200).json({ message: "Post deletado com sucesso" })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar imagem', error })
    }
})