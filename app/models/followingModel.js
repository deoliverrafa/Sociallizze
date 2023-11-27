import { theme } from "../../public/assets/js/theme";
import { containers } from "../../public/assets/js/variables";
import { getUserImage, localUserId } from "./userFunctions";

const logoLoading = document.querySelectorAll('.logo.rotate')
const divLoading = document.getElementById('loader')


logoLoading[0].style.animation = 'rotate .3s infinite linear';
divLoading.style.display = 'flex'

console.log(containers);

// Função para criar o card do usuário
async function createUserCard(nickName, id, isFollowing) {

    const novaDiv = document.createElement('div');
    novaDiv.classList.add('container', 'search-friends', 'container-column-center');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'user', 'container', 'container-row-between');

    const userDiv = document.createElement('div');
    userDiv.classList.add('container', 'container-row-between');

    const userImage = document.createElement('img');
    userImage.classList.add('image', 'profile-small');

    const image = await getUserImage(id);

    if (image.type == "image/png" || image.type == "image/jpeg") {
        userImage.src = URL.createObjectURL(image);
    } else {
        userImage.src = './../../public/assets/images/user/user.png';
    }
    userDiv.appendChild(userImage);

    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('container', 'container-column-center');

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('container', 'container-row');
    userInfoDiv.appendChild(nameContainer);

    const userName = document.createElement('p');
    userName.classList.add('text', 'nick', 'text-bold');

    if (theme == 'dark') {
        userName.style.color = '#FFFFFF';
    }

    userName.textContent = nickName;
    nameContainer.appendChild(userName);

    const checkmarkImage = document.createElement('img');
    checkmarkImage.classList.add('image', 'checkmark');
    checkmarkImage.src = "./../../public/assets/images/user/checkmark_blue.png";
    nameContainer.appendChild(checkmarkImage);

    userDiv.appendChild(userInfoDiv);
    cardDiv.appendChild(userDiv);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('container', 'container-row');

    const buttonSeguir = createButton(isFollowing ? 'person_check' : 'person_add', isFollowing ? 'SEGUINDO' : 'SEGUIR', isFollowing ? 'check' : 'add', id, isFollowing ? 'seguindo' : 'seguir');

    buttonSeguir.addEventListener('mouseover', () => {
        if (isFollowing) {
            const buttonRemover = createButton('person_remove', 'REMOVER ?', 'remove', id, 'remover');

            buttonSeguir.replaceWith(buttonRemover);

            buttonRemover.addEventListener('mouseout', () => {
                buttonRemover.replaceWith(buttonSeguir);
            });

            buttonRemover.addEventListener('click', async () => {
                try {
                    const response = await fetch('https://sociallizze-api.up.railway.app/api/unfollow', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userIdToUnfollow: id,
                            currentUserId: localStorage.getItem('userId'),
                        }),
                    });

                    if (response.ok) {
                        // Atualize o botão ou faça outras ações necessárias
                        const buttonRemoved = createButton('person_remove', 'REMOVIDO', 'removed', id, 'removed');

                        buttonSeguir.replaceWith(buttonRemoved)

                        // Tratamento de Erro
                        // console.log('Usuário removido com sucesso');
                    } else {
                        console.error('Erro ao remover o usuário:', response.statusText);
                    }
                } catch (error) {
                    console.log("Erro ao remover usuário", error);
                }
            });
        }
    });

    buttonsDiv.appendChild(buttonSeguir);
    cardDiv.appendChild(buttonsDiv);
    novaDiv.appendChild(cardDiv);
    containers[2].appendChild(novaDiv);
}

// Função para criar os botões
function createButton(iconName, buttonText, buttonClass, id, tipo) {
    const newButton = document.createElement('button');
    newButton.classList.add('button', buttonClass, 'button-primary');
    const span = document.createElement('span');
    span.classList.add('icon', 'material-symbols-outlined');
    span.textContent = iconName;

    newButton.appendChild(span);
    newButton.appendChild(document.createTextNode(buttonText));

    // Adiciona um evento de clique para cada botão, registrando o usuário e o tipo de botão
    newButton.addEventListener('click', async () => {
        if (tipo == 'remover') {
            try {
                const response = await fetch('https://sociallizze-api.up.railway.app/api/unfollow', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userIdToUnfollow: id,
                        currentUserId: localStorage.getItem('userId'),
                    }),
                });

                if (response.ok) {
                    // Atualize o botão ou faça outras ações necessárias
                    console.log('Usuario removido com sucesso');
                } else {
                    console.error('Erro ao remover o usuário:', response.statusText);
                }
            } catch (error) {
                console.log("Erro ao remover usuario", error);
            }
        }
    });

    return newButton;
}

// Função para criar os cards dos usuários seguidos
async function createFollowingUserCards(users) {
    try {
        const currentUser = await getCurrentUser();

        for (const user of users) {
            const { _id, nickName } = user;
            const isFollowing = isUserFollowing(currentUser, user);

            // Cria o card para o usuário
            await createUserCard(nickName, _id, isFollowing);
        }
    } catch (error) {
        console.error('Erro ao criar cards dos usuários seguidos:', error);
    }
}

// Evento de input com debounce para pesquisar usuários 
const searchUsersDebounced = await debounce(async (searchTerm) => {
    try {
        if (searchTerm == 'null') {
            return;
        }

        divLoading.style.display = 'flex';
        logoLoading[0].style.animation = 'rotate .3s infinite linear';

        const response = await fetch(`https://sociallizze-api.up.railway.app/api/following?id=${localUserId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        console.log(data);
        divLoading.style.display = 'none';
        logoLoading[0].style.animation = 'none';

        await createFollowingUserCards(data.following);
    } catch (error) {
        console.error("Erro ao obter dados dos usuários seguidos", error);
    }
}, 0); // Delay de 1200 milissegundos

// Função para verificar se o usuário já está sendo seguido
function isUserFollowing(currentUser, user) {
    const userIsFollowing = currentUser.following && currentUser.following.some((followedUserId) => followedUserId === user._id);

    return userIsFollowing || false;
}

// Função para obter o usuário atual
async function getCurrentUser() {
    // FUNÇÃO IMPLEMENTADA PARA PEGAR DADOS DO USUÁRIO ATUAL

    const response = await fetch(`https://sociallizze-api.up.railway.app/api/getCurrentUser?currentUserId=${localUserId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao obter usuário atual');
    }

    return await response.json();
}

// Função debounce para evitar buscas frequentes
async function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Evento de input com debounce para pesquisar usuários 
searchUsersDebounced();