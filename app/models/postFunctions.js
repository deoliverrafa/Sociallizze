import { showSuccessMessage } from "../../public/assets/js/variables";

async function createPost(displayFiles, title, desc, userId) {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('userId', userId)
    // Adicione cada arquivo à FormData
    Object.keys(displayFiles).forEach(key => {
        const file = displayFiles[key];
        formData.append('images', file, key); // Adicione cada arquivo com sua chave
    });

    try {
        const response = await fetch('https://sociallizze-api.up.railway.app/postagem/create', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (!result) {
            alert('Erro ao criar postagem')
        }
        showSuccessMessage("Postagem Criada com sucesso")
    } catch (error) {
        alert('Erro ao criar post', error)
    }
}

async function getAllPosts(skip, limit) {
    try {
        const response = await fetch(`https://sociallizze-api.up.railway.app/postagem/get?skip=${skip}&limit=${limit}`);
        const data = await response.json();

        return data.posts;
    } catch (error) {
        console.error('Erro ao obter posts:', error);
        return [];
    }
}

async function getImageById(id) {
    try {
        const response = await fetch(`https://sociallizze-api.up.railway.app/postagem/getPostImages/${id}`);
        const data = await response.json();

        if (response.ok) {
            const images = data.images;

            // Vamos supor que você queira exibir a primeira imagem encontrada
            if (images && images.length > 0) {
                const imageData = images[0].imageData;
                const contentType = images[0].contentType;
                const dataUrl = `data:${contentType};base64,${imageData}`;

                return dataUrl;
            }
        } else {
            console.error('Erro ao buscar imagem:', data.error || 'Erro desconhecido');
        }
    } catch (error) {
        console.error('Erro ao pegar imagem', error);
    }
}

export { createPost, getAllPosts, getImageById };