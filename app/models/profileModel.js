// IMPORTANDO AS VÁRIAVEIS //

import { bios, buttonLogOut, containers, imageProfile, loads, textNick, mores } from "../../public/assets/js/variables";
import { getUserData, userId, userLoggedIn } from "./loginModel";

let dadosUser = null

console.log("Image profile -->", imageProfile)

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {

        dadosUser = await getUserData();

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


buttonLogOut[0].addEventListener('click', async () => {
    logOut()
    window.location.href = 'index.html'
});

// Rota para atualizar a imagem de perfil de um usuário
document.getElementById('avatarForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('avatar', document.getElementById('avatarInput').files[0]);

    // Obtenha o ID do usuário (substitua pelo método real para obtê-lo)
    const userId = localStorage.getItem('userId');

    await fetch(`http://localhost:3000/api/updateAvatar?userId=${userId}`, {
        method: 'PUT',
        body: formData,
    }).then((response) => {
        if (!response.ok) {
            alert('Erro ao atualizar a imagem de perfil');
        }
        return response.json();
    })
        .then((data) => {
            if (data.error) {
                alert('Erro ao pegar dados')
                console.log(data.error);
            } else {
                alert('Foto de perfil atualizada com sucesso');
            }
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.error);
        });
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
        const response = await fetch(`http://localhost:3000/api/getUserImage?userId=${userId}`, {
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