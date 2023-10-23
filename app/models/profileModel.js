// IMPORTANDO AS VÁRIAVEIS //

import { buttonLogOut, imageProfile, textNick } from "../../public/assets/js/variables";
import { getUserData, userId } from "./loginModel";

console.log(userId);

if (userId == null || userId == undefined) {

} else {
    const dadosUser = await getUserData();
    if (dadosUser) {
        textNick[0].innerHTML = dadosUser.nickName;
        textNick[1].innerHTML = dadosUser.nickName;
    }

    const image = await getUserImage();
    if (image) {
        const imageUrl = URL.createObjectURL(image); // Converte o blob em uma URL
        imageProfile[0].src = imageUrl;
        imageProfile[1].src = imageUrl;
    }
}


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
    localStorage.setItem('userId', null)
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