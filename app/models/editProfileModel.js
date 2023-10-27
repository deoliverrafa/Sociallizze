import { profileOpen } from '../../public/assets/js/profile';
import { alts, cancels, cards, containers, headers, icons, iconsClose, itens, modals, saves } from "../../public/assets/js/variables";

const formImage = document.getElementById('avatarForm')

console.log(formImage)
itens[11].addEventListener('click', async () => {
    modals[6].style.display = 'flex'
    modals[5].style.display = 'none';
})

iconsClose[6].addEventListener('click', () => {
    modals[6].style.display = 'none';
    profileOpen = false;
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

saves[0].addEventListener('click', () => {
    fetch('http://localhost:3000/api/attProfile', {
        method: 'PUT',
        body: ''
    });
});

// Rota para atualizar a imagem de perfil de um usuário

saves[0].addEventListener('click', () => {
    let formsData;
    const userId = localStorage.getItem('userId');

    document.getElementById('avatarForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        formsData += new FormData();

        
        formsData.append('avatar', document.getElementById('avatarInput').files[0]);
        // Obtenha o ID do usuário (substitua pelo método real para obtê-lo)
        

        document.getElementById('cityForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            formsData += new FormData();
            // Obtenha o ID do usuário (substitua pelo método real para obtê-lo)
        })

        document.getElementById('bioForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            formsData += new FormData();
            // Obtenha o ID do usuário (substitua pelo método real para obtê-lo)

        })
    })

    console.log(formsData)
})

console.log("Modais: ", modals)

console.log("Cards: ", cards)

console.log("Iten: ", itens)

console.log("Icones-X: ", iconsClose)

console.log("Icones: ", icons)

console.log("Container: ", containers)

console.log("Header: ", headers)