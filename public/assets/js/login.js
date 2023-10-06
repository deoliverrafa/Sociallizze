// IMPORTANDO AS VÁRIAVEIS //
import { iconsClose, modals, cards, containers, textError } from './variables.js';

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    fetch(`http://localhost:3000/api/usuarios?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
                // LÓGICA PARA APARECER MENSAGEM DE ERROR //
                containers[0].style.display = 'flex';
            } else {
                alert("Usuário Encontrado")
            }
        })
    // .catch(error => {
    //     console.log("Usuário não cadastrado, crie uma conta", error)
    //     alert('Usuário não cadastrado, crie uma conta', error)
    // });
})

// LÓGICA PARA APARECER O CARD DE LOGIN //
if (!data.id) {
    modals[0].style.display = 'flex';
    modals[0].style.animation = 'opacityModal .3s ease-in-out forwards';
    cards[0].style.animation = 'smoothUpCard .5s ease-in-out forwards';
}


// FECHAR O CARD //
iconsClose[0].addEventListener('click', () => {
    cards[0].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    modals[0].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[0].style.display = 'none';
    }, 300);
});