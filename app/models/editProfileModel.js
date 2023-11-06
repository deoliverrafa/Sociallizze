import { alts, cancels, cards, containers, headers, icons, iconsClose, imageProfile, itens, modals, saves } from "../../public/assets/js/variables";

let avatarFile;
let cityData;
let bioData;

const avatarInput = document.getElementById('avatarInput');
const bioInput = document.getElementById('bioForm')
const cityInput = document.getElementById('cityForm')

itens[11].addEventListener('click', async () => {
    modals[6].style.display = 'flex'
    modals[5].style.display = 'none';
})

iconsClose[6].addEventListener('click', () => {
    modals[6].style.display = 'none';
});

// ESCONDE OS INPUTS DE TROCAR DE SENHA //
containers[37].style.display = 'none';
containers[38].style.display = 'none';

// MOSTRAR OS INPUTS DE TROCAR DE SENHA //
alts[0].addEventListener('click', () => {
    containers[37].style.display = 'flex';
    containers[38].style.display = 'none';
});

// CANCELA MUDANÇAS //
cancels[0].addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Rota para atualizar a imagem de perfil de um usuário

console.log("Modais: ", modals)

console.log("Profiles: ", imageProfile);

console.log("Cards: ", cards)

console.log("Iten: ", itens)

console.log("Icones-X: ", iconsClose)

console.log("Icones: ", icons)

console.log("Container: ", containers)

console.log("Header: ", headers)

avatarInput.addEventListener('change', function () {
    avatarFile = avatarInput.files[0];

    if (avatarFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imageProfile[4].src = event.target.result;
        };
        reader.readAsDataURL(avatarFile);
    }
});

cityInput.addEventListener('change', () => {
    cityData = cityInput.firstElementChild.value;
    console.log("Dados Cidade -->", cityData)
})

bioInput.addEventListener('change', () => {
    bioData = bioInput.firstElementChild.value;
    console.log("Dados bio -->", bioData)
})

saves[0].addEventListener('click', async () => {
    const userId = localStorage.getItem('userId');

    const formData = new FormData(); // Use um objeto FormData para enviar a imagem.
    formData.append('avatar', avatarFile); // Adicione a imagem ao FormData.

    // Adicione os outros dados ao FormData.

    if (bioData !== undefined) {
        formData.append('bioData', bioData);
    }
    if (cityData !== undefined) {
        formData.append('cityData', cityData);
    }

    formData.append('userId', userId);

    const response = await fetch('https://sociallizze-api.up.railway.app/api/attProfile', {
        method: 'PUT',
        body: formData, // Use o FormData como corpo da solicitação.
    });

    if (!response.ok) {
        alert('Erro ao atualizar perfil')
    } else {
        window.location.href = 'index.html';
    }
});
