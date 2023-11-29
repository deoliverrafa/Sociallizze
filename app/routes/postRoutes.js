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
        // Dados do corpo da requisição
        const { title, desc, userId } = req.body;
        const images = req.files;

        await connection.connect()

        // Processando as imagens antes de salvar no banco de dados
        const processedImages = await Promise.all(
            images.map(async (image, index) => {
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
                    field: `image${index + 1}` // Nome do campo de imagem (image1, image2, ...)
                };
            })
        );

        // Criando um objeto com as imagens processadas
        const imageObjects = {};
        processedImages.forEach(processedImage => {
            imageObjects[processedImage.field] = {
                image: processedImage.image,
                fileName: processedImage.fileName,
                contentType: processedImage.contentType
            };
        });

        // Criando uma nova postagem com os campos de imagens correspondentes
        const newPost = new postSchema({ title, desc, userId, ...imageObjects });

        // Salvando a nova postagem no banco de dados
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

router.get('/getPostImages/:postId', async (req, res) => {
    try {
        const { postId } = req.params;

        const post = await postSchema.findById(postId);

        if (!post || !post.images || post.images.length === 0) {
            return res.status(404).json({ error: "Imagens da postagem não encontradas" });
        }

        const imagesData = post.images.map(image => ({
            imageId: image._id,
            contentType: image.contentType,
            imageData: image.image.toString('base64') // Converte a imagem para base64 para envio na resposta
        }));

        res.status(200).json({ images: imagesData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro na solicitação" });
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