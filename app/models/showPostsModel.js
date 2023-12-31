const { applyTheme } = require("../../public/assets/js/theme");
const { getAllPosts } = require("./postFunctions");
const { getUserData, getUserImage } = require("./userFunctions");
const posts = document.querySelectorAll('.posts');

posts[0].style.display = 'flex';
posts[0].style.flexDirection = 'column-reverse';
posts[0].style.alignItems = 'center';
posts[0].style.position = 'relative';
posts[0].style.zIndex = '0';

async function createBlobUrl(blob) {
    const url = URL.createObjectURL(blob)
    return url
}
const logoLoading = document.querySelectorAll('.logo.rotate')
const divLoading = document.querySelectorAll('#loader')

divLoading[1].style.display = 'flex';
logoLoading[1].style.animation = 'rotate .3s infinite linear'

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const postData = await getAllPosts(0, 0);

        // Carrega animação de loading
        logoLoading[0].style.animation

        for (const post of postData) {

            const { nickName } = await getUserData(post.userId, 'nickName');

            const userImage = await getUserImage(post.userId)

            const urlImagemUsuario = URL.createObjectURL(userImage);

            const imagesUrls = []; // Array para armazenar os URLs das imagens

            // Itera por cada propriedade imageX no post
            for (let i = 1; post[`image${i}`]; i++) {
                const imageData = post[`image${i}`];
                try {
                    const imageUrl = await createBlobUrlFromBuffer(imageData.image.data, imageData.contentType);
                    imagesUrls.push(imageUrl);
                } catch (error) {
                    console.log(`Erro ao gerar blob para image${i}`, error);
                }
            }

            const newPostDiv = await createPostDiv(
                urlImagemUsuario,
                nickName,
                post.title,
                post.desc,
                imagesUrls, // Passa o array de URLs das imagens
            );


            // ESCONDE DIV LOADING
            divLoading[1].style.display = 'none';
            logoLoading[1].style.animation = 'none'

            posts[0].appendChild(newPostDiv);
            applyTheme();
        }
    } catch (error) {
        console.error('Erro ao carregar os posts:', error);
    }
});

async function createBlobUrlFromBuffer(buffer, contentType) {
    const blob = new Blob([buffer], { type: contentType });
    const url = URL.createObjectURL(blob);
    return url;
}

async function createPostDiv(userImageUrl, username, title, desc, imagesData) {
    // Criação do elemento posts div com a classe "card post container container-column"
    const postDiv = document.createElement('div');
    postDiv.classList.add('card', 'post', 'container', 'container-column');
    postDiv.style.width = '90%';

    // Criação do cabeçalho do post (container container-row-between)
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('container', 'container-row-between');

    // Criação do conteúdo do cabeçalho (container container-row)
    const headerContentDiv = document.createElement('div');
    headerContentDiv.classList.add('container', 'container-row');

    // Criação da imagem do perfil (img)
    const profileImg = document.createElement('img');
    profileImg.classList.add('image', 'profile-small');
    profileImg.src = userImageUrl ? userImageUrl : 'public/assets/images/user/user.png';


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

    if (imagesData) {
        for (const imageData of imagesData) {
            try {
                const blob = await arrayBufferToBlob(imageData.image.data, imageData.contentType);

                const imageUrl = await createBlobUrl(blob);

                if (blob.type !== null) {
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
    }

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

    if (localStorage.getItem('selectedTheme' == 'dark')) {
        titlePara.style.color = '#FFFFFF'
    }
    titlePara.textContent = title;

    // Criação do texto do post (p)
    const textPara = document.createElement('p');
    textPara.classList.add('text', 'comment', 'text-wrap');

    if (localStorage.getItem('selectedTheme' == 'dark')) {
        textPara.style.color = '#FFFFFF';
    }
    textPara.textContent = desc;

    // Adiciona título e texto ao conteúdo do post
    contentDiv.appendChild(titlePara);
    contentDiv.appendChild(textPara);
    postDiv.appendChild(contentDiv);

    // CRIAR DIV LINHA HORIZONTAL //
    const separationDiv = document.createElement('div');
    separationDiv.classList.add('container', 'container-row-center');

    // CRIAR LINHA HORIZONTAL //
    const separationHR = document.createElement('hr');
    separationHR.style.background = 'linear-gradient(90deg, rgba(13, 8, 96, 1) 0%,';
    separationHR.style.border = 'none';
    separationHR.style.borderRadius = '5px';
    separationHR.style.width = '100%';

    separationDiv.appendChild(separationHR);

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
    postDiv.appendChild(separationDiv);
    postDiv.appendChild(interactionDiv);

    // Retorna o elemento posts div
    return postDiv;
}

// Função para converter dados de imagem em Blob
async function arrayBufferToBlob(buffer, type) {
    return new Blob([buffer], { type: type });

}