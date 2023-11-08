// Lógica para aparecer dados do usuário no perfil extendido
import { buttonLogOut, imageProfile, textBirthDayData, textEmail, textNacionality, textNick, textNumber, textName, itens, textBio } from "../../public/assets/js/variables";
import { getUserData, getUserImage, logOut, verifyUserLogged } from "./userFunctions";

const cardPost = document.querySelectorAll('.card.post');
const cardPhoto = document.querySelectorAll('.card.photo');
const cardVideo = document.querySelectorAll('.card.video');
const cardBio = document.querySelectorAll('.card.bio');
const containerBio = document.querySelectorAll('.container.bio');
const containerNoBio = document.querySelectorAll('.container.no-bio');

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA REAPROVEITAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        const dadosUser = await getUserData();
        if (dadosUser) {
            textName[0].innerHTML = dadosUser.userName;
            textNick[0].innerHTML = `@${dadosUser.nickName}`;
            textNumber[0].innerHTML = dadosUser.phoneNumber;
            textBirthDayData[0].innerHTML = dadosUser.birthDayData;
            textEmail[0].innerHTML = dadosUser.email;
            textNacionality[0].innerHTML = dadosUser.nacionality;
            // BIO INDEFINIDA //
            if(!dadosUser.bio) {
                containerBio[1].style.display = 'none';
                containerNoBio[0].style.display = 'flex';
            } else {
                containerNoBio[0].style.display = 'none';
                textBio[0].innerHTML = dadosUser.bio;

            }
        } else {
            textNick[0].innerHTML = 'Usuario'
        }
        const image = await getUserImage();

        if (image.type == "image/png") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            imageProfile[0].src = '../../public/assets/images/user/user.png'
        }
    } else {
        window.location.href = '../../index.html'
    }
})

buttonLogOut[0].addEventListener('click', () => {
    logOut()
    window.location.href = '../../index.html'
})

// EXIBIR CONTEÚDO NO PERFIL //
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