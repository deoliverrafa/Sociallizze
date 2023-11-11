import { cards, containers, inputs } from "../../public/assets/js/variables";

function createDivUser(user) {
    // PEGA IMAGEM DE CADA USUARIO
    let urlImage;
    const dataImage = user.avatar.image;
    
    if (dataImage) {
        urlImage = URL.createObjectURL(dataImage)
    } else {
        urlImage = './../../public/assets/images/user/user.png'
    }   


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
    userImage.src = `${urlImage}`;
    userDiv.appendChild(userImage);

    // Limpeza da URL quando não for mais necessária
    URL.revokeObjectURL(urlImage);
    
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
function createDivFollowingUser(user) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('container', 'search-friends', 'container-column-center');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'user', 'container', 'container-row-between');

    const userDiv = document.createElement('div');
    userDiv.classList.add('container', 'container-row');

    const userImage = document.createElement('img');
    userImage.classList.add('image', 'profile-small');
    userImage.src = "./../../public/assets/images/user/user.png";
    userDiv.appendChild(userImage);

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

    const buttonRemover = criarBotao('person_remove', 'REMOVER', 'remove', user, 'bloquear');
    const buttonSeguindo = criarBotao('person_check', 'SEGUINDO', 'check', user, 'seguindo');

    buttonsDiv.appendChild(buttonSeguindo);
    buttonsDiv.appendChild(buttonRemover);
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
                    return;
                    // Atualize o botão ou faça outras ações necessárias
                } else {
                    console.error('Erro ao seguir o usuário:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao seguir o usuário:', error);
            }
        };

        if (tipo == 'bloquear') {

        }
    });
    return newButton;
}



// CRIANDO-SE A FUNÇÃO DEBOUNCE PARA QUE NÃO VENHA FAZER A PESQUISA APÓS CADA LETRA DIGITADA
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}


const searchUsersDebounced = debounce(async (searchTerm) => {
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

        const currentUser = await getCurrentUser(); // Implemente esta função

        data.forEach((user) => {
            if (user._id === currentUser._id) {
                return null;
            }

            if (isUserFollowing(currentUser, user)) {
                const followingUserDiv = createDivFollowingUser(user);
                if (followingUserDiv) {
                    containers[5].appendChild(followingUserDiv);
                }
            } else {
                const userDiv = createDivUser(user);
                if (userDiv) {
                    containers[3].appendChild(userDiv);
                }
            }
        });

    } catch (error) {
        console.log("Erro ao obter dados", error);
    }
}, 300); // Delay de 300 milissegundos

// Função para verificar se o usuário já está sendo seguido
function isUserFollowing(currentUser, user) {
    return currentUser.following.some((followedUserId) => followedUserId === user._id);
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