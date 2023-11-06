// IMPORTANDO AS VÁRIAVEIS //
import { imageProfile, textNick, itens } from "../../public/assets/js/variables";
import { getUserData, getUserImage, verifyUserLogged } from "./userFunctions";


document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
       const dadosUser = await getUserData();
       
        if (dadosUser) {
            textNick[0].innerHTML = `@${dadosUser.nickName}`;
        }

        const image = await getUserImage();
        
        if (image.type == "image/png") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            imageProfile[0].src = 'public/assets/images/user/user.png'
        }
    }
})

// EXIBIR CONTEÚDO NO PERFIL //
const cardPost = document.querySelectorAll('.card.post');
const cardPhoto = document.querySelectorAll('.card.photo');
const cardVideo = document.querySelectorAll('.card.video');
const cardBio = document.querySelectorAll('.card.bio');

itens[0].addEventListener('click', () => {
    itens[1].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.remove('active');
    itens[0].classList.add('active');
    cardPhoto[0].classList.add('container-disable');
    cardVideo[0].classList.add('container-disable');
    cardBio[0].classList.add('container-disable');
    cardPost[0].classList.remove('container-disable');
});

itens[1].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.remove('active');
    itens[1].classList.add('active');
    cardPost[0].classList.add('container-disable');
    cardVideo[0].classList.add('container-disable');
    cardBio[0].classList.add('container-disable');
    cardPhoto[0].classList.remove('container-disable');
});

itens[2].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[1].classList.remove('active');
    itens[3].classList.remove('active');
    itens[2].classList.add('active');
    cardPost[0].classList.add('container-disable');
    cardPhoto[0].classList.add('container-disable');
    cardBio[0].classList.add('container-disable');
    cardVideo[0].classList.remove('container-disable');
});

itens[3].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[1].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.add('active');
    cardPost[0].classList.add('container-disable');
    cardPhoto[0].classList.add('container-disable');
    cardVideo[0].classList.add('container-disable');
    cardBio[0].classList.remove('container-disable');
});