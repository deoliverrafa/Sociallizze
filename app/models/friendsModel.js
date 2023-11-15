import { containers, inputs } from "../../public/assets/js/variables";
import { getUserImage } from "./userFunctions";

async function createDivUser(user) {

    // Cria a div container
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('container', 'search-friends', 'container-column-center');

    // Cria a div card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'user', 'container', 'container-row-between');

    // Cria a div com a imagem e informações do usuário
    const userDiv = document.createElement('div');
    userDiv.classList.add('container', 'container-row');

    // Adiciona a imagem do usuário
    const userImage = document.createElement('img');
    userImage.classList.add('image', 'profile-small');

    // PEGA IMAGEM DE CADA USUARIO
    const image = await getUserImage(user._id);

    if (image.type == "image/png") {
        userImage.src = URL.createObjectURL(image);
    } else {
        userImage.src = './../../public/assets/images/user/user.png';
    }
    userDiv.appendChild(userImage)

    // Cria a div com o nome do usuário e checkmark
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('container', 'container-column-center');

    // Adiciona o contêiner antes do nome do usuário
    const nameContainer = document.createElement('div');
    nameContainer.classList.add('container', 'container-row');
    userInfoDiv.appendChild(nameContainer);

    // Adiciona o nome do usuário
    const userName = document.createElement('p');
    userName.classList.add('text', 'nick', 'text-bold');
    userName.textContent = user.nickName;
    nameContainer.appendChild(userName);

    // Adiciona o checkmark
    const checkmarkImage = document.createElement('img');
    checkmarkImage.classList.add('image', 'checkmark');
    checkmarkImage.src = "./../../public/assets/images/user/checkmark_blue.png";
    nameContainer.appendChild(checkmarkImage);

    userDiv.appendChild(userInfoDiv);

    cardDiv.appendChild(userDiv);

    // Cria os botões
    const buttonSeguir = criarBotao('person_add', 'SEGUIR', 'add', user, 'seguir');
    // const buttonRemover = criarBotao('person_remove', 'BLOQUEAR', 'remove', user, 'bloquear');
    // const buttonSeguindo = criarBotao('person_check', 'SEGUINDO', 'check', user, 'seguindo');    

    // Adiciona os botões à div card
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('container', 'container-row');
    buttonsDiv.appendChild(buttonSeguir);
    // buttonsDiv.appendChild(buttonSeguindo);
    // buttonsDiv.appendChild(buttonRemover);
    cardDiv.appendChild(buttonsDiv);

    // Adiciona a div card à div container
    novaDiv.appendChild(cardDiv);

    // Adiciona a div container ao cards[0]
    containers[3].appendChild(novaDiv);
}

// Função para criar div de usuário que você está seguindo
async function createDivFollowingUser(user) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('container', 'search-friends', 'container-column-center');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'user', 'container', 'container-row-between');

    const userDiv = document.createElement('div');
    userDiv.classList.add('container', 'container-row');

    const userImage = document.createElement('img');
    userImage.classList.add('image', 'profile-small');

    // PEGA IMAGEM DE CADA USUARIO
    const image = await getUserImage(user._id);

    if (image.type == "image/png") {
        userImage.src = URL.createObjectURL(image);
    } else {
        userImage.src = './../../public/assets/images/user/user.png';
    }
    userDiv.appendChild(userImage)

    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('container', 'container-column-center');

    const nameContainer = document.createElement('div');
    nameContainer.classList.add('container', 'container-row');
    userInfoDiv.appendChild(nameContainer);

    const userName = document.createElement('p');
    userName.classList.add('text', 'nick', 'text-bold');
    userName.textContent = user.nickName;
    nameContainer.appendChild(userName);

    const checkmarkImage = document.createElement('img');
    checkmarkImage.classList.add('image', 'checkmark');
    checkmarkImage.src = "./../../public/assets/images/user/checkmark_blue.png";
    nameContainer.appendChild(checkmarkImage);

    userDiv.appendChild(userInfoDiv);
    cardDiv.appendChild(userDiv);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('container', 'container-row');

    const buttonSeguindo = criarBotao('person_check', 'SEGUINDO', 'check', user, 'seguindo');

    // Adiciona um evento de mouseover para ativar o botão de remoção
    buttonSeguindo.addEventListener('mouseover', () => {
        const buttonRemover = criarBotao('person_remove', 'REMOVER', 'remove', user, 'remover');
        const buttonRemovido = criarBotao('person_remove', 'REMOVIDO', 'remove', user, 'remover')

        buttonRemover.addEventListener('mouseout', () => {
            // Restaura o botão "SEGUINDO" quando o mouse sai do botão de remoção
            buttonRemover.replaceWith(buttonSeguindo);  
        });

        buttonRemover.addEventListener('click', () => {
            buttonRemover.replaceWith(buttonRemovido);
        })

        buttonSeguindo.replaceWith(buttonRemover);
    });

    buttonsDiv.appendChild(buttonSeguindo);
    cardDiv.appendChild(buttonsDiv);

    novaDiv.appendChild(cardDiv);
    containers[5].appendChild(novaDiv);
}


// Função para criar botões
function criarBotao(iconName, buttonText, buttonClass, user, tipo) {
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
                const response = await fetch('http://localhost:3000/api/follow', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userIdToFollow: user._id,
                        currentUserId: localStorage.getItem('userId'),
                    }),
                });

                // Verifique se a solicitação foi bem-sucedida
                if (response.ok) {
                    const buttonSeguindo = criarBotao('person_check', 'SEGUINDO', 'check', user, 'seguindo');
                    newButton.replaceWith(buttonSeguindo)

                    newButton.addEventListener('mouseover', () => {
                        const buttonRemover = criarBotao('person_remove', 'REMOVER', 'remove', user, 'remover');
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
                const response = await fetch('http://localhost:3000/api/unfollow', {
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



// CRIANDO-SE A FUNÇÃO DEBOUNCE PARA QUE NÃO VENHA FAZER A PESQUISA APÓS CADA LETRA DIGITADA
async function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}


const searchUsersDebounced = await debounce(async (searchTerm) => {
    try {
        if (searchTerm == 'null') {
            return;
        }

        const response = await fetch(`http://localhost:3000/api/getUser?nickName=${searchTerm}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        // Limpa os resultados anteriores antes de adicionar novos
        containers[3].innerHTML = '';
        containers[5].innerHTML = '';

        const currentUser = await getCurrentUser();

        for (const user of data) {
            if (user._id !== currentUser._id) {
                if (isUserFollowing(currentUser, user)) {
                    const followingUserDiv = createDivFollowingUser(user);
                    if (followingUserDiv instanceof Node) {7
                        // Habilitando container de amigos
                        containers[4].style.display = 'flex';
                        containers[5].appendChild(followingUserDiv);
                    }
                } else {
                    const userDiv = createDivUser(user);
                    if (userDiv instanceof Node) {
                        containers[3].appendChild(userDiv);
                    }
                }
            }
        }

    } catch (error) {
        console.log("Erro ao obter dados", error);
    }
}, 1000); // Delay de 1000 milissegundos

// Função para verificar se o usuário já está sendo seguido
function isUserFollowing(currentUser, user) {
    const userIsFollowing = currentUser.following && currentUser.following.some((followedUserId) => followedUserId === user._id);

    return userIsFollowing || false;
}

// Função para obter o usuário atual
async function getCurrentUser() {
    // FUNÇÃO IMPLEMENTADA PARA PEGAR DADOS DO USUÁRIO ATUAL

    const response = await fetch(`http://localhost:3000/api/getCurrentUser?currentUserId=${localStorage.getItem('userId')}`, {
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
// Adiciona o evento de input com o debounce
inputs[0].addEventListener('input', async () => {
    const searchTerm = inputs[0].value.trim();

    if (searchTerm.length === 0) {
        // Limpa os resultados se o campo de pesquisa estiver vazio
        containers[3].innerHTML = '';
        containers[5].innerHTML = '';
        return;
    }
    // Chama a função de busca com debounce
    searchUsersDebounced(searchTerm);
});