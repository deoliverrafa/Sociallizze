import { buttons, edits, iconsClose, imageProfile, inputs, modals } from "../../public/assets/js/variables";
import { localUserId } from "./userFunctions"

let avatarFile;
let bioData;
const avatarInput = document.getElementById('avatarInput');

// ALTERAR AVATAR //
avatarInput.addEventListener('change', async () => {
    avatarFile = avatarInput.files[0];

    if (avatarFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imageProfile[0].src = event.target.result;
        };
        reader.readAsDataURL(avatarFile);

        // Altera a Foto de perfil diretamente quando muda a imagem
        const userId = localStorage.getItem('userId');
        const formData = new FormData(); // Crie um novo FormData aqui.

        formData.append('avatar', avatarFile);
        formData.append('userId', userId);

        try {
            const response = await fetch('http://localhost:3000/api/attProfilePhoto', {
                method: 'PUT',
                body: formData,
            });

            const data = await response.json();

            if (!data) {
                alert(data.error)
            } else {
                // Testagem para atualização de foto
                // alert("Foto atualizada com sucesso!!");
            }
        } catch (error) {
            console.error(error);
            alert("Erro na solicitação");
        }
    }
});

// EXIBIR O EDITAR PERFIL //
const body = document.querySelector("body");
edits[0].addEventListener('click', () => {
    modals[0].style.display = 'flex';
    body.style.overflowY = 'hidden';
    window.scrollTo(0, 0);
});

// FECHAR O EDITAR PERFIL //
iconsClose[1].addEventListener('click', () => {
    modals[0].style.display = 'none';
    body.style.overflowY = 'auto';
});

// PEGA VALOR DA BIO SE O USUÁRIO ALTERAR
inputs[0].addEventListener('input', () => {
    bioData = inputs[0].value
})

// CONFIRMAR ALTERAÇÂO DE BIO
buttons[5].addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/updateBio', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bioData, localUserId }),
        });

        const data = await response.json();

        if (!data) {
            alert(data.error)
        } else {
            // Testagem para atualização de foto
            window.location.reload()
        }
    } catch (error) {
        console.error(error);
        alert("Erro na solicitação");
    }
})