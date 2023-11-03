// IMPORTANDO AS VÁRIAVEIS //
import { imageProfile, textNick, itens, modals, iconsClose } from "../../public/assets/js/variables";
import { getUserData, getUserImage, verifyUserLogged } from "./userFunctions";

let dadosUser = null

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData();

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName;
        }

        const image = await getUserImage();
        if (image.type == "image/png") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            imageProfile[0].src = 'public/assets/images/user/user.png'
            imageProfile[1].src = 'public/assets/images/user/user.png'
        }
    }
})

// MOSTRAR - EDITAR PERFIL //
itens[4].addEventListener('click', () => {
    modals[0].style.display = 'flex';
});

// ESCONDER - EDITAR PERFIL //
iconsClose[0].addEventListener('click', () => {
    modals[0].style.display = 'none';
});

// EXIBIR CONTEÚDO NO PERFIL //
itens[0].addEventListener('click', () => {
    itens[1].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.remove('active');
    itens[0].classList.add('active');
});

itens[1].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.remove('active');
    itens[1].classList.add('active');
});

itens[2].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[1].classList.remove('active');
    itens[3].classList.remove('active');
    itens[2].classList.add('active');
});

itens[3].addEventListener('click', () => {
    itens[0].classList.remove('active');
    itens[1].classList.remove('active');
    itens[2].classList.remove('active');
    itens[3].classList.add('active');
});

export {dadosUser}