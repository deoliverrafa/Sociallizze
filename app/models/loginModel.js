// IMPORTANDO AS VÁRIAVEIS //
import {containers, showLoginMenu, closeLoginMenu} from '../../public/assets/js/variables.js';

document.addEventListener('DOMContentLoaded', () => {
    const userLoggedIn = localStorage.getItem('userLoggedIn');

    // LÓGICA PARA APARECER O CARD DE LOGIN //
    if (userLoggedIn !== 'true' && typeof id == "undefined") {
        showLoginMenu();
    } else {
        closeLoginMenu();
    }
})

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    fetch(`http://localhost:3000/api/usuarios?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                // LÓGICA PARA APARECER MENSAGEM DE ERROR //
                containers[0].style.display = 'flex';
                containers[0].querySelector('.text-error').innerHTML = data.error;
            } else {
                // Após o login bem-sucedido
                localStorage.setItem('userLoggedIn', 'true');
                closeLoginMenu();
            }
        })
})