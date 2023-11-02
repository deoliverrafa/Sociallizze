// IMPORTANDO AS VÁRIAVEIS //

import { bios, buttonLogOut, containers, icons, iconsClose, imageProfile, textNick } from "../../public/assets/js/variables";
import { getUserData, userId, userLoggedIn } from "./loginModel";

let dadosUser = null

console.log(iconsClose);

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData();
        
        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName;
            textNick[1].innerHTML = dadosUser.nickName;
        }

        const image = await getUserImage();
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
            imageProfile[2].src = imageUrl;
            imageProfile[4].src = imageUrl;
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


// IMPORTANDO AS VÁRIAVEIS //

let profileOpen = false;

itens[0].addEventListener('click', async () => {
    if (!profileOpen) {
        profileOpen = true;
        modals[5].style.display = 'flex';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
        cards[6].style.animation = 'none';
        cards[7].style.animation = 'none';
        cards[11].style.animation = 'none';

        setTimeout(() => {
            modals[2].style.display = 'none';
        }, 300);
    }
});

iconsClose[5].addEventListener('click', () => {
    if (profileOpen) {
        modals[5].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        cards[4].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
        setTimeout(() => {
            modals[5].style.display = 'none';
            modals[2].style.display = 'none';
            cards[4].style.animation = 'smoothUpCard .5s ease-in-out forwards';
            modals[5].style.animation = 'opacityModal .3s ease-in-out forwards';
            profileOpen = false;
        }, 300);
    }
});

// REMOVER ANIMAÇÕES //
cards[8].style.animation = 'none';
cards[9].style.animation = 'none';
cards[10].style.animation = 'none';

export {logOut, profileOpen};