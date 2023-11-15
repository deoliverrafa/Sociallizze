const { textNick, inputs, cards, buttons, containers } = require("../../public/assets/js/variables");
const { userLoggedIn, getUserData, getUserImage, localUserId } = require("./userFunctions");

let textValue;

const imgProfile = document.querySelector('.image.profile-small')

function createNewComment (comment) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('card', 'comment', 'container-column-center');

    const newComment = document.createElement('p');
    newComment.classList.add('text', 'text-center', 'text-wrap');
    
    const newSpan = document.createElement('span');
    newSpan.classList.add('comment')
    newSpan.innerHTML = comment;

    newComment.appendChild(newSpan);
    novaDiv.appendChild(newComment);

    cards[5].appendChild(novaDiv);
}

document.addEventListener('DOMContentLoaded', async () => {

    if (userLoggedIn) {
       
        const dadosUser = await getUserData(localUserId);

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName
        }

        const img = await getUserImage(localUserId);

        if (img.type == 'image/png') {
            imgProfile.src = URL.createObjectURL(img)
        } else {
            imgProfile.src = '../../public/assets/images/user/user.png'
        }

    }

})

// Input para pegar o que o usuário quer digitar
inputs[0].addEventListener('input', () =>{
    // Salva Valor digitado pelo usuário na variável global textValue
    textValue = inputs[0].value;
});

// Botão de Adicionar para adicionar um comentário a imagem
buttons[0].addEventListener('click', () => {
    inputs[0].value = ''
    createNewComment(textValue);
})