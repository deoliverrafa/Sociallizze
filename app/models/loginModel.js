// IMPORTANDO AS VÁRIAVEIS //
import { nextButton, previousButton, iconsClose, containers, showLoginMenu,  showRegisterMenu, closeLoginMenu, closeRegisterMenu, inputs, checkboxs, linksRegister, buttonsSelect, buttons, textsCheckbox, buttonsSubmit } from '../../public/assets/js/variables.js';

let count = 0;
let id;

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
                id = data._id;
                localStorage.setItem('userLoggedIn', 'true');
                closeLoginMenu();
            }
        })
})

// MOSTRAR SENHA //
checkboxs[0].addEventListener('change', () => {
    if(checkboxs[0].checked) {
        inputs[1].type = 'text';
    } else {
        inputs[1].type = 'password';
    }
});

// FECHAR O MODAL LOGIN //
iconsClose[0].addEventListener('click', () => {
    closeLoginMenu();
});

// FECHAR O MODAL REGISTRO //
iconsClose[1].addEventListener('click', () => {
    closeRegisterMenu();
});

// TRANSIÇÃO TELA DE LOGIN //
linksRegister[1].addEventListener('click', () => {
    closeRegisterMenu();
    showLoginMenu();
    count = 0;
});

// TRANSIÇÃO TELA REGISTRO //
linksRegister[0].addEventListener('click', () => {
    closeLoginMenu();
    showRegisterMenu();
});

// TRANSIÇÃO PELO CADASTRO // 
buttonsSelect[1].addEventListener('click', () => {
    count--;
    console.log(count)
    previousButton(count);
    
});

buttonsSelect[0].addEventListener('click', () => {
    count++;
    console.log(count)
    nextButton(count);
});

if(count == 0) {
    buttonsSelect[1].style.display = 'none';
    buttons[1].style.display = 'none';
    inputs[4].style.display = 'none';
    inputs[5].style.display = 'none';
    inputs[6].style.display = 'none';
    textsCheckbox[1].style.display = 'none';
    containers[1].style.display = 'none';
}