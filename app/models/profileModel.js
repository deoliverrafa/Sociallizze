// IMPORTANDO AS VÁRIAVEIS //

import { buttonLogOut, imageProfile, textNick } from "../../public/assets/js/variables";
import { getUserData, userId, userLoggedIn } from "./loginModel";

let dadosUser = null

console.log(imageProfile)
console.log(textNick)

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData();

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName;
        }

        const image = await getUserImage();
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
            imageProfile[1].src = imageUrl;
        }
    }
})

if (window.location.href == "profile.html") {
    buttonLogOut[0].addEventListener('click', async () => {
        logOut()
        window.location.href = 'index.html'
    });
}

async function logOut() {
    localStorage.setItem('userLoggedIn', 'false')
    localStorage.setItem('userId', 'null')
}

async function verifyUserLogged() {
    let status;
    if (userId == null || userLoggedIn == 'false') {
        status = false
    } else {
        status = true
    }
    return status;
}

async function getUserImage() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        return null;
    }

    try {
        const response = await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const imageBlob = await response.blob();
        return imageBlob;
    } catch (error) {
        alert(error.message);
        console.log(error);
        return null;
    }
}

export { logOut }