const express = require('express');
const router = express.Router();
const getConnection = require('../config/connection');
const connection = new getConnection()
const postSchema = require('../schemas/postSchema');
const multer = require('multer');
const sharp = require('sharp');

// CONFIGURAÇÃO DO MULTER PARA ARMAZENAMENTO DE IMAGENS EM MEMÓRIA
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ROTA PARA CRIAR UMA NOVA POSTAGEM
router.post('/create', upload.array('images', 4), async (req, res) => {
    try {
        await connection.connect();

        const { title, desc, userId } = req.body;
        const images = req.files;

        // Processando as imagens antes de salvar no banco de dados
        const processedImages = await Promise.all(
            images.map(async (image) => {
                // Redimensionando e ajustando a qualidade da imagem usando o Sharp
                const resizedImageBuffer = await sharp(image.buffer)
                    .resize({ width: 500 }) // Redimensionar para largura máxima de 500 pixels
                    .toFormat('jpeg') // Converter para JPEG (pode ser outro formato)
                    .jpeg({ quality: 50 }) // Ajustar a qualidade do JPEG (valor entre 0 e 100)
                    .toBuffer();

                return {
                    image: resizedImageBuffer,
                    fileName: image.originalname,
                    contentType: image.mimetype,
                };
            })
        );

        // Criando um array de objetos para o modelo de postagem
        const postImages = processedImages.map((processedImage) => ({
            image: processedImage.image,
            fileName: processedImage.fileName,
            contentType: processedImage.contentType,
        }));

        const newPost = new postSchema({ title, desc, images: postImages, userId });
        await newPost.save();

        res.status(201).json({ message: 'Postagem criada com sucesso', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar postagem', error: error.message });
        console.error(error);
    }
});

// ROTA PARA FAZER O GET DE TODOS OS POSTS COM PAGINAÇÃO
router.get('/get', async (req, res) => {
    try {
        const { skip = 0, limit = 10 } = req.query; // Parâmetros de query para skip e limit
        const posts = await postSchema.find().skip(parseInt(skip)).limit(parseInt(limit));
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter postagens', error: error.message });
    }
});

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

module.exports = router