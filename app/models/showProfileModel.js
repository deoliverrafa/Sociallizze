// Lógica para aparecer dados do usuário no perfil extendido
import { buttonLogOut, imageProfile, textBirthDayData, textEmail, textNacionality, textNick, textNumber } from "../../public/assets/js/variables";
import { getUserData, getUserImage, logOut, verifyUserLogged } from "./userFunctions";

console.log(textNumber)
console.log(textBirthDayData)
console.log(textEmail)
console.log(textNacionality)

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA REAPROVEITAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        const dadosUser = await getUserData();
        if (dadosUser) {
            console.log(dadosUser)
            textNick[0].innerHTML = `@${dadosUser.nickName}`;
            textNumber[0].innerHTML = dadosUser.phoneNumber;
            textBirthDayData[0].innerHTML = dadosUser.birthDayData;
            textEmail[0].innerHTML = dadosUser.email;
            textNacionality[0].innerHTML = dadosUser.nacionality;
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