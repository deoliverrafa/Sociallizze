import { imageProfile, edits, modals, iconsClose } from "../../public/assets/js/variables";

let avatarFile;
let bioData;

const avatarInput = document.getElementById('avatarInput');
const btnEditProfile = document.querySelector('.file')

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

// SALVAR MUDANÇAS //
btnEditProfile.addEventListener('click', async () => {
    const userId = localStorage.getItem('userId');
    const formData = new FormData(); // Use um objeto FormData para enviar a imagem.
    formData.append('avatar', avatarFile); // Adicione a imagem ao FormData.

    // Adicione os outros dados ao FormData.
    // resto da lógica

    if (bioData !== undefined) {
        formData.append('bioData', bioData);
    }
    
    formData.append('userId', userId);
    
    // const response = await fetch('http://localhost:3000/api/attProfile', {
    //     method: 'PUT',
    //     body: formData, // Use o FormData como corpo da solicitação.
    // });
    
    // if (!response.ok) {
    //     alert('Erro ao atualizar perfil')
    // } else {
    //     window.location.href = './../../index.html';
    // }
});
