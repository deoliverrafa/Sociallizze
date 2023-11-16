import { containers, inputs } from "../../public/assets/js/variables";
import { getUserImage, localUserId } from "./userFunctions";
const logoLoading = document.querySelectorAll('.logo.rotate')

containers[3].style.display = 'flex';

// Função para criar o card do usuário
async function createUserCard(nickName, id, isFollowing, containers) {
    const containerIndex = isFollowing ? 6 : 4;

    const novaDiv = document.createElement('div');
    novaDiv.classList.add('container', 'search-friends', 'container-column-center');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'user', 'container', 'container-row-between');

    const userDiv = document.createElement('div');
    userDiv.classList.add('container', 'container-row-between');

    const userImage = document.createElement('img');
    userImage.classList.add('image', 'profile-small');

    const image = await getUserImage(id);

    if (image.type === "image/png") {
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
            const buttonRemover = createButton('person_remove', 'REMOVER', 'remove', id, 'remover');
            buttonsDiv.appendChild(buttonRemover);

            buttonRemover.addEventListener('mouseout', () => {
                buttonsDiv.removeChild(buttonRemover);
            });

            buttonRemover.addEventListener('click', async () => {
                try {
                    const response = await fetch('https://sociallizze-api.up.railway.app/api/unfollow', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userIdToUnfollow: user._id,
                            currentUserId: localStorage.getItem('userId'),
                        }),
                    });

                    if (response.ok) {
                        // Atualize o botão ou faça outras ações necessárias
                        console.log('Usuário removido com sucesso');
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
    containers[containerIndex].appendChild(novaDiv);
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
        if (tipo == 'seguir') {
            try {
                // Faça uma solicitação para seguir o usuário
                const response = await fetch('https://sociallizze-api.up.railway.app/api/follow', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userIdToFollow: id,
                        currentUserId: localStorage.getItem('userId'),
                    }),
                });

                // Verifique se a solicitação foi bem-sucedida
                if (response.ok) {
                    const buttonSeguindo = createButton('person_check', 'SEGUINDO', 'check', id, 'seguindo');
                    newButton.replaceWith(buttonSeguindo)

                    newButton.addEventListener('mouseover', () => {
                        const buttonRemover = createButton('person_remove', 'REMOVER', 'remove', id, 'remover');
                        newButton.replaceWith(buttonRemover);
                    });
                    return;
                } else {
                    console.error('Erro ao seguir o usuário:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao seguir o usuário:', error);
            }
        };

        if (tipo == 'remover') {
            try {
                const response = await fetch('https://sociallizze-api.up.railway.app/api/unfollow', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userIdToUnfollow: user._id,
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

function startLoadingAnimation() {
    logoLoading.forEach(logo => {
        logo.style.animation = 'rotate .3s infinite linear';
    });
}

// Função para parar a animação de loading
function stopLoadingAnimation() {
    logoLoading.forEach(logo => {
        logo.style.animation = 'none';
    });
}


const searchUsersDebounced = await debounce(async (searchTerm) => {
    try {
        if (searchTerm == 'null') {
            return;
        }
        // ANIMAÇÃO PARA PESQUISAR USUÁRIOS
        containers[3].style.display = 'flex';
        startLoadingAnimation();

        // ... (restante do código para buscar usuários)

        stopLoadingAnimation(); // Parar a animação após o término da busca

        const response = await fetch(`https://sociallizze-api.up.railway.app/api/getUser?nickName=${searchTerm}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        // Limpa os resultados anteriores antes de adicionar novos
        containers[4].innerHTML = '';
        containers[6].innerHTML = '';

        const currentUser = await getCurrentUser();

        for (const user of data) {
            if (user._id !== currentUser._id) {
                if (isUserFollowing(currentUser, user)) {
                    const followingUserCard = await createUserCard(user.nickName, user._id, true, containers);
                    if (followingUserCard instanceof Node) {
                        containers[6].appendChild(followingUserCard);
                    }
                } else {
                    const userCard = await createUserCard(user.nickName, user._id, false, containers);
                    if (userCard instanceof Node) {
                        containers[4].appendChild(userCard);
                    }
                }
            }
        }

    } catch (error) {
        console.log("Erro ao obter dados", error);
    }
}, 1200); // Delay de 1200 milissegundos

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
inputs[0].addEventListener('input', async () => {
    const searchTerm = inputs[0].value.trim();
    const container = containers;
    if (searchTerm.length === 0) {
        containers[4].innerHTML = '';
        containers[6].innerHTML = '';
        return;
    }
    searchUsersDebounced(searchTerm, container);
});