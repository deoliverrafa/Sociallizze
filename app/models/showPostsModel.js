const { getAllPosts } = require("./postFunctions");
const { getUserData, getUserImage } = require("./userFunctions");

const principal = document.querySelectorAll('.principal')

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await getAllPosts(0, 0);

        for (const element of data) {
            const { nickName } = await getUserData(element.userId, 'nickName');
            const img = await getUserImage(element.userId);
            
            let url;

            if (img.type === 'image/png' || img.type === 'image/jpeg') {
                url = URL.createObjectURL(img);
            }

            const newPostDiv = await createPostDiv(
                url,
                nickName,
                element.title,
                element.desc,
                element.images
            );

            principal[0].appendChild(newPostDiv);
        }
    } catch (error) {
        console.error('Erro ao carregar os posts:', error);
    }
});

async function createPostDiv(userImageUrl, username, title, desc, imagesData) {
    // Criação do elemento principal div com a classe "card post container container-column"
    const postDiv = document.createElement('div');
    postDiv.classList.add('card', 'post', 'container', 'container-column');

    // Criação do cabeçalho do post (container container-row-between)
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('container', 'container-row-between');

    // Criação do conteúdo do cabeçalho (container container-row)
    const headerContentDiv = document.createElement('div');
    headerContentDiv.classList.add('container', 'container-row');

    // Criação da imagem do perfil (img)
    const profileImg = document.createElement('img');
    profileImg.classList.add('image', 'profile-small');
    profileImg.src = userImageUrl;

    // Criação do nome de usuário (p)
    const usernamePara = document.createElement('p');
    usernamePara.classList.add('text', 'nick', 'text-bold');
    usernamePara.textContent = username;

    // Criação do ícone de verificação (img)
    const checkmarkImg = document.createElement('img');
    checkmarkImg.classList.add('image', 'checkmark');
    checkmarkImg.src = './../../public/assets/images/user/checkmark_blue.png';

    // Adiciona elementos de imagem e texto ao conteúdo do cabeçalho
    headerContentDiv.appendChild(profileImg);
    const usernameContainer = document.createElement('div');
    usernameContainer.classList.add('container', 'container-column-center');
    const usernameRow = document.createElement('div');
    usernameRow.classList.add('container', 'container-row');
    usernameRow.appendChild(usernamePara);
    usernameRow.appendChild(checkmarkImg);
    usernameContainer.appendChild(usernameRow);
    headerContentDiv.appendChild(usernameContainer);

    // Criação dos botões correspondente se está seguindo ou não
    // const followButton = createButton('person_add', 'SEGUIR', 'add', userId, 'seguir');
    // headerDiv.appendChild(followButton)

    headerDiv.appendChild(headerContentDiv);
    postDiv.appendChild(headerDiv);

    // Criação do slider de imagens (swiper)
    const swiperDiv = document.createElement('div');
    swiperDiv.classList.add('swiper');

    const swiperWrapperDiv = document.createElement('div');
    swiperWrapperDiv.classList.add('swiper-wrapper');

    for (const imageData of imagesData) {
        try {
            console.log("Loop", imagesData[0].image);

            const blob = await arrayBufferToBlob(imagesData[0].image.data, 'image/jpeg');

            console.log(blob);
            if (blob.type === 'image/jpeg' || blob.type === 'image/png') {
                const imageUrl = URL.createObjectURL(blob);

                const swiperSlideDiv = document.createElement('div');
                swiperSlideDiv.classList.add('swiper-slide');

                const imgElement = document.createElement('img');
                imgElement.classList.add('image', 'image-full');
                imgElement.src = imageUrl;
                imgElement.alt = 'post';

                swiperSlideDiv.appendChild(imgElement);
                swiperWrapperDiv.appendChild(swiperSlideDiv);
            }
        } catch (error) {
            console.log("Erro ao gerar blob", error);
        }
    }

    swiperDiv.appendChild(swiperWrapperDiv);

    // Criação dos elementos de paginação e botões do swiper
    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('swiper-pagination');

    const prevButtonDiv = document.createElement('div');
    prevButtonDiv.classList.add('swiper-button-prev');

    const nextButtonDiv = document.createElement('div');
    nextButtonDiv.classList.add('swiper-button-next');

    swiperDiv.appendChild(paginationDiv);
    swiperDiv.appendChild(prevButtonDiv);
    swiperDiv.appendChild(nextButtonDiv);

    postDiv.appendChild(swiperDiv);

    // Criação do conteúdo do post (container container-column-center)
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('container', 'container-column-center');

    // Criação do título (p)
    const titlePara = document.createElement('p');
    titlePara.classList.add('text', 'title', 'text-wrap', 'text-bold');
    titlePara.textContent = title;

    // Criação do texto do post (p)
    const textPara = document.createElement('p');
    textPara.classList.add('text', 'comment', 'text-wrap');
    textPara.textContent = desc;

    // Adiciona título e texto ao conteúdo do post
    contentDiv.appendChild(titlePara);
    contentDiv.appendChild(textPara);
    postDiv.appendChild(contentDiv);

    // Criação das seções de interação (container container-row-between)
    const interactionDiv = document.createElement('div');
    interactionDiv.classList.add('container', 'container-row-between');

    // Criação da seção de curtidas (container container-row)
    const likeDiv = document.createElement('div');
    likeDiv.classList.add('container', 'container-row');
    const likeIcon = document.createElement('span');
    likeIcon.classList.add('icon', 'like-add', 'icon-primary', 'material-symbols-outlined');
    likeIcon.textContent = 'heart_plus';
    likeDiv.appendChild(likeIcon);

    // Criação da seção de favoritos (container container-row)
    const favoriteDiv = document.createElement('div');
    favoriteDiv.classList.add('container', 'container-row');
    const favoriteIcon = document.createElement('span');
    favoriteIcon.classList.add('icon', 'favorite-add', 'icon-primary', 'material-symbols-outlined');
    favoriteIcon.textContent = 'bookmark_add';
    favoriteDiv.appendChild(favoriteIcon);

    // Adiciona seções de interação ao post
    interactionDiv.appendChild(likeDiv);
    interactionDiv.appendChild(favoriteDiv);
    postDiv.appendChild(interactionDiv);

    // Retorna o elemento principal div
    return postDiv;
}

// Função para converter dados de imagem em Blob
async function arrayBufferToBlob(buffer, type) {
    return new Blob([buffer], { type: type });
}

function extractImageArrays(data) {
    return data.map(item => item.images.map(image => image.image));
}