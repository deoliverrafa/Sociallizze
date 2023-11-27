// IMPORTANDO AS VÁRIAVEIS //
import { imageProfile, textNick, containers } from "../../public/assets/js/variables";
import { getUserData, getUserImage, localUserId, verifyUserLogged } from "./userFunctions";
const logoLoading = document.querySelectorAll('.logo.rotate')

containers[13].style.display = 'flex';
containers[14].style.display = 'none';
logoLoading[0].style.animation = 'rotate .3s infinite linear';

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        const dadosUser = await getUserData(localUserId, 'nickName');

        if (dadosUser) {
            textNick[0].innerHTML = `@${dadosUser.nickName}`;
        }

        const image = await getUserImage(localUserId);

        if (image.type == "image/png" || image.type == "image/jpeg") {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
        } else {
            imageProfile[0].src = 'public/assets/images/user/user.png'
            console.clear();
        }
        containers[13].style.display = 'none';
        containers[14].style.display = 'flex';
    }
})