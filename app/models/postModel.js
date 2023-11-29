const { inputs, buttons } = require("../../public/assets/js/variables");
const { createPost } = require("./postFunctions");
const { localUserId } = require('./userFunctions')

let title;
let desc;
let selectedFiles = [];

const displayFiles = [];
const posts = document.querySelectorAll('div.post');
const divsImage = document.querySelectorAll('#image')
const textarea = document.querySelectorAll('.textarea')
const imageInput = document.getElementById('imageInput');
const iconsRemove = document.querySelectorAll('.icon.remove')


// ESCONDE DIVS DE IMAGENS NÃO NESCESSÁRIAS NO MOMENTO
posts.forEach(element => {
    element.style.display = 'none';
});

imageInput.addEventListener('change', function (event) {
    selectedFiles = event.target.files;

    for (let i = 0; i < selectedFiles.length && i < posts.length; i++) {
        const file = selectedFiles[i];
        const postDiv = posts[i];
        const image = divsImage[i];

        const imageUrl = URL.createObjectURL(file);

        postDiv.style.display = 'flex';
        image.src = imageUrl;


        // Gera um identificador único para o arquivo (pode ser o nome do arquivo, um ID único, etc.)
        const fileId = `file_${i}`;

        // Adiciona o arquivo à lista de exibição usando o identificador exclusivo como chave
        displayFiles[fileId] = file;
    }
});

// Função para remover um arquivo do array de arquivos selecionados
function removeFile(index, fileId) {
    // Encontra o índice correspondente ao fileId no array displayFiles
    const fileIndex = Object.keys(displayFiles).findIndex(key => key === fileId);

    if (fileIndex !== -1) {
        // Oculta a div correspondente ao ícone clicado
        posts[index].style.display = 'none';

        // Remove o arquivo correspondente da lista de exibição, mantendo os arquivos originais intactos
        delete displayFiles[fileId];

        // Atualiza a lista de arquivos selecionados com base nos arquivos restantes no objeto de exibição
        selectedFiles = Object.values(displayFiles);

        // Limpa a imagem exibida na div correspondente
        divsImage[index].src = '';

        // Verifica os arquivos restantes após a remoção
        console.log('Arquivos restantes:', selectedFiles);
    } else {
        console.log('Arquivo não encontrado.');
    }
}

iconsRemove.forEach((element, index) => {
    const fileId = `file_${index}`;
    element.addEventListener('click', () => {
        removeFile(index, fileId);
    });
});

// Input para pegar a descrição
textarea[0].addEventListener('input', function () {
    desc = this.value;
    console.log(desc);
})

// Input para pegar o título da publicação
inputs[0].addEventListener('input', function () {
    // Salva Valor digitado pelo usuário na variável global title
    title = this.value;
    console.log(title);
});


// BOTÃO PARA CONFIRMAR O ENVIO DA POSTAGEM
buttons[0].addEventListener('click', async () => {
    await createPost(displayFiles, title, desc, localUserId)
    window.location.href = '../../index.html'
})