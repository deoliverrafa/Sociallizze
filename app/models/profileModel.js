// IMPORTANDO AS VÁRIAVEIS //
import { imageProfile, textNick, itens } from "../../public/assets/js/variables";
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
            imageProfile[1].src = imageUrl;
        } else {
            imageProfile[0].src = 'public/assets/images/user/user.png'
            imageProfile[1].src = 'public/assets/images/user/user.png'
        }
    }
})

// EXIBIR CONTEÚDO NO PERFIL //
const containerPost = document.querySelectorAll('.post.container');
containerPost.style.display = 'none';

itens[0].addEventListener('click', () => {
    containerPost.style.display = 'flex';
});