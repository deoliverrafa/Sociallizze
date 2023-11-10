// Lógica para aparecer dados do usuário no perfil extendido
import { buttonLogOut, imageProfile, textBirthDayData, textEmail, textNacionality, textNick, textNumber, textName, itens, textBio, buttons } from "../../public/assets/js/variables";
import { getUserData, getUserImage, logOut, userId, verifyUserLogged } from "./userFunctions";

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
            if (!dadosUser.bio) {
                containerBio[1].style.display = 'none';
                containerNoBio[0].style.display = 'flex';
            } else {
                containerNoBio[0].style.display = 'none';
                textBio[0].innerHTML = dadosUser.bio;

            }

            // ESCONDER BOTÕES DESNECESSÁRIOS ADICIONAR, REMOVER, BLOQUEAR
            if (userId == dadosUser._id) {
                buttons[0].style.display = 'none';
                buttons[1].style.display = 'none';
                buttons[2].style.display = 'none';
                buttons[3].style.display = 'none';
            }

        } else {
            textNick[0].innerHTML = 'Usuario'
        }

        // PUXA IMAGEM DO BANCO DE DADOS
        const image = await getUserImage();

        // VERIFICA SE HÁ IMAGEM
        if (image.type == "image/png") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            // ATRIBUI IMAGEM DEFAULT
            imageProfile[0].src = '../../public/assets/images/user/user.png'
        }

    } else {
        window.location.href = '../../index.html'
    }
})

// LÓGICA DE LOGOUT
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