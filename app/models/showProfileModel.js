// Lógica para aparecer dados do usuário no perfil extendido
import { buttonLogOut, imageProfile, textBirthDayData, textEmail, textNacionality, textNick, textNumber, textName, itens, textBio, buttons, texts, containers } from "../../public/assets/js/variables";
import { getUserData, getUserImage, localUserId, logOut, verifyUserLogged } from "./userFunctions";

const cardPost = document.querySelectorAll('.card.post');
const cardPhoto = document.querySelectorAll('.card.photo');
const cardVideo = document.querySelectorAll('.card.video');
const cardBio = document.querySelectorAll('.card.bio');
const containerBio = document.querySelectorAll('.container.bio');
const containerNoBio = document.querySelectorAll('.container.no-bio');
const profileCard = document.querySelectorAll('.profile')
const logoLoading = document.querySelectorAll('.logo.rotate')

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA REAPROVEITAR DADOS DO USUÁRIO //

    const loader = document.getElementById('loader');
    profileCard[1].style.display = 'none'

    logoLoading[0].style.animation = 'rotate .3s infinite linear';
    loader.style.display = 'flex'; // Mostra o indicador de carregamento

    if (await verifyUserLogged() == true) {
        const dadosUser = await getUserData(localUserId, 'userName,nickName,phoneNumber,birthDayData,email,nacionality,bio,_id,Nfollowers,Nfollowing,showEmail,showBirthDayData,showNacionality,showPhoneNumber');
        
        console.log(dadosUser);
        // ESCONDER BOTÕES DESNECESSÁRIOS ADICIONAR, REMOVER, BLOQUEAR
        if (localUserId == dadosUser._id) {
            buttons[0].style.display = 'none';
            buttons[1].style.display = 'none';
            buttons[2].style.display = 'none';
            buttons[3].style.display = 'none';
        }


        if (dadosUser) {
            textName[0].innerHTML = dadosUser.userName;
            textNick[0].innerHTML = `@${dadosUser.nickName}`;
            texts[5].innerHTML = dadosUser.Nfollowers;
            texts[7].innerHTML = dadosUser.Nfollowing;


            if (dadosUser.showEmail === true) {
                textEmail[0].innerHTML = dadosUser.email;
            } else {
                containers[18].style.display = 'none'
            }

            if (dadosUser.showPhoneNumber === true) {
                textNumber[0].innerHTML = dadosUser.phoneNumber;
            } else {
                containers[16].style.display = 'none'
            }

            if (dadosUser.showNacionality === true) {
                textNacionality[0].innerHTML = dadosUser.nacionality;
            } else {
                containers[15].style.display = 'none'
            }

            if (dadosUser.showBirthDayData === true) {
                textBirthDayData[0].innerHTML = dadosUser.birthDayData;
            } else {
                containers[17].style.display = 'none'
            }   

            if (!dadosUser.showBirthDayData && !dadosUser.showEmail && !dadosUser.showNacionality && !dadosUser.showPhoneNumber) {
                containers[13].style.display = 'none';
            }

            // BIO INDEFINIDA //
            if (!dadosUser.bio) {
                containerBio[1].style.display = 'none';
                containerNoBio[0].style.display = 'flex';
            } else {
                containerNoBio[0].style.display = 'none';
                textBio[0].innerHTML = dadosUser.bio;

            }

        } else {
            window.location.href = '../../index.html'
        }

        // PUXA IMAGEM DO BANCO DE DADOS
        const image = await getUserImage(localUserId);

        // VERIFICA SE HÁ IMAGEM
        if (image.type == "image/png" || image.type == "image/jpeg") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            // ATRIBUI IMAGEM DEFAULT
            imageProfile[0].src = '../../public/assets/images/user/user.png'
        }

        loader.style.display = 'none';
        profileCard[1].style.display = 'flex'
        return true;
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