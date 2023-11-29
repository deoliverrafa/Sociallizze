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
        const response = await fetch('http://localhost:3000/postagem/create', {
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

async function getPosts(skip, limit) {
    try {
        const response = await fetch(`http://localhost:3000/postagem/get?skip=${skip}&limit=${limit}`);
        const data = await response.json();
        
        return data.posts;
    } catch (error) {
        console.error('Erro ao obter posts:', error);
        return [];
    }
}


export { createPost, getPosts };