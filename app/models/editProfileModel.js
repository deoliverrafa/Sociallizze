import { alts, cancels, cards, containers, headers, icons, iconsClose, imageProfile, itens, modals, saves } from "../../public/assets/js/variables";

let avatarFile;
let bioData;

const avatarInput = document.getElementById('avatarInput');

// CANCELA MUDANÇAS //
cancels[0].addEventListener('click', () => {
    window.location.href = './../../index.html';
});

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

/*bioInput.addEventListener('change', () => {
    bioData = bioInput.firstElementChild.value;
    console.log("Dados bio -->", bioData)
})*/

// SALVAR MUDANÇAS //
saves[0].addEventListener('click', async () => {
    const userId = localStorage.getItem('userId');

    const formData = new FormData(); // Use um objeto FormData para enviar a imagem.
    formData.append('avatar', avatarFile); // Adicione a imagem ao FormData.

    // Adicione os outros dados ao FormData.

    if (bioData !== undefined) {
        formData.append('bioData', bioData);
    }

    formData.append('userId', userId);

    const response = await fetch('https://sociallizze-api.up.railway.app/api/attProfile', {
        method: 'PUT',
        body: formData, // Use o FormData como corpo da solicitação.
    });

    if (!response.ok) {
        alert('Erro ao atualizar perfil')
    } else {
        window.location.href = './../../index.html';
    }
});
