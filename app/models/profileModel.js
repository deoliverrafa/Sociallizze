// IMPORTANDO AS VÁRIAVEIS //

import { bios, buttonLogOut, containers, imageProfile, loads, textNick, mores } from "../../public/assets/js/variables";
import { getUserData, userId, userLoggedIn } from "./loginModel";

let dadosUser = null

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData();

        console.log(dadosUser)
        // Lógica perfil secundário
        loads[0].style.display = 'none'
        containers[3].style.display = 'flex'

        // Lógica perfil primário
        loads[1].style.display = 'none'
        containers[11].style.display = 'flex'

        // Lógica seguidores
        loads[2].style.display = 'none'
        containers[17].style.display = 'flex'

        // Lógica da bio
        loads[3].style.display = 'none'
        containers[25].style.display = 'flex'
        

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName;
            textNick[1].innerHTML = dadosUser.nickName;

            let bioText = bios[0].innerText = dadosUser.bio;
            let isExpanded = false;
            const charLimit = 22;
            // ESCONDER BIO - MOSTRAR BIO //
            if (bioText.length > charLimit) {
                const truncatedText = bioText.slice(0, charLimit)
                bios[0].innerText = truncatedText;

                mores[0].addEventListener('click', () => {
                    if (isExpanded) {
                        bios[0].innerText = truncatedText;
                        mores[0].innerText = 'MAIS';
                    } else {
                        bios[0].innerText = bioText;
                        mores[0].innerText = 'MENOS';
                    }
                    isExpanded = !isExpanded;
                });
            }
        }

        const image = await getUserImage();
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
            imageProfile[2].src = imageUrl;
            imageProfile[4].src = imageUrl;
        }
    } else {
        // Lógica esconder perfil secundário
        loads[0].style.display = 'flex'
        containers[3].style.display = 'none'

        // Lógica esconder perfil primário
        loads[1].style.display = 'flex'
        containers[11].style.display = 'none'

        // Lógica esconder seguidores
        loads[2].style.display = 'flex'
        containers[17].style.display = 'none'

        // Lógica esconder da bio
        loads[3].style.display = 'flex'
        containers[25].style.display = 'none'
    }
})


buttonLogOut[0].addEventListener('click', async () => {
    logOut()
    window.location.href = 'index.html'
});

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
        const response = await fetch(`http://localhost:3000/api/getUserImage`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userId)
        }
        );
        const imageBlob = await response.blob();
        return imageBlob;
    } catch (error) {
        alert(error.message);
        console.log(error);
        return null;
    }
}