// Lógica para aparecer dados do usuário no perfil extendido
import { buttonLogOut, imageProfile, textNick } from "../../public/assets/js/variables";
import { getUserData, getUserImage, logOut, verifyUserLogged } from "./userFunctions";

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        let dadosUser = await getUserData();

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName;
        }

        const image = await getUserImage();
        if (image.type ='image/png') {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            imageProfile[0].src = 'public/assets/images/user/'
        }
    } else {
        window.location.href = '../../index.html'
    }
})

buttonLogOut[0].addEventListener('click', () => {
    logOut()
    window.location.href = '../../index.html'
})