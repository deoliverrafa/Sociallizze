// IMPORTANDO AS VÁRIAVEIS //

import { buttonLogOut, textNick } from "../../public/assets/js/variables";
import { getUserData } from "./loginModel";

if (localStorage.getItem('userId') != null) {
    const dadosUser = await getUserData()
    textNick[0].innerHTML = dadosUser.nickName;
    textNick[1].innerHTML = dadosUser.nickName;
}

buttonLogOut[0].addEventListener('click', async () => {
    logOut()
    window.location.href = 'index.html'
})


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
            alert('Erro ao atualizar usuário')
        }
        return response.json()
    })
        .then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            alert('Foto de perfil atualizada com sucesso', data )
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.error);
        })
});

async function loadUserData() {
    try {
        let userData = await getUserData();
        return userData
    }
    catch (error) {
        console.log("Erro ao carregar dados: ", error);
    }
}

async function logOut() {
    localStorage.setItem('userLoggedIn', 'false')
    localStorage.setItem('userId', null)
}