import { edits, iconsClose, imageProfile, inputs, modals } from "../../public/assets/js/variables";

let avatarFile;
let bioData;

const avatarInput = document.getElementById('avatarInput');
const btnConfirmChanges = document.querySelectorAll('.button.save');
// ALTERAR AVATAR //
avatarInput.addEventListener('change', function () {
    avatarFile = avatarInput.files[0];

    if (avatarFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imageProfile[0].src = event.target.result;
        };
        reader.readAsDataURL(avatarFile);
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

// FECHAR ALTERAÇÂO DE BIO
btnConfirmChanges[1].addEventListener('click', async () => {
    modals[0].style.display = 'none';
    body.style.overflowY = 'auto';
})

// SALVAR MUDANÇAS //
btnConfirmChanges[0].addEventListener('click', async () => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData(); // Crie um novo FormData aqui.

    formData.append('avatar', avatarFile);
    formData.append('userId', userId);
    formData.append('bioData', bioData);

    try {
        const response = await fetch('https://sociallizze-api.up.railway.app/api/attProfile', {
            method: 'PUT',
            body: formData,
        });

        const data = await response.json();

        if (!data) {
            alert(data.error)
        } else {
            window.location.reload();
        }
    } catch (error) {
        console.error(error);
        alert("Erro na solicitação");
    }
});