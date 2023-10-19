// IMPORTANDO AS VÁRIAVEIS //
import { nextButton, previousButton, iconsClose, containers, showLoginMenu,  showRegisterMenu, closeLoginMenu, closeRegisterMenu, inputs, checkboxs, linksRegister, buttonsSelect, textsCheckbox, buttonsSubmit, modals, textSuccess } from '../../public/assets/js/variables.js';

let userLoggedIn = localStorage.getItem('userLoggedIn');
let count = 0;

document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA APARECER O CARD DE LOGIN //
    if (userLoggedIn !== 'true') {
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
                alert(data)
                containers[0].style.display = 'flex';
                containers[0].querySelector('.text-error').innerHTML = data.error;
            } else {
                // Após o login bem-sucedido
                localStorage.setItem('userLoggedIn', 'true');
                closeLoginMenu();
                modals[3].style.display = 'flex';
                textSuccess[0].innerHTML = 'Conta logada com sucesso!!!'
                
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

checkboxs[1].addEventListener('change', () => {
    if(checkboxs[1].checked) {
        inputs[6].type = 'text';
    } else {
        inputs[6].type = 'password';
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
    previousButton(count);
    
});

buttonsSelect[0].addEventListener('click', () => {
    count++;
    nextButton(count);
});

if(count == 0) {
    buttonsSelect[1].style.display = 'none';
    buttonsSubmit[1].style.display = 'none';
    inputs[4].style.display = 'none';
    inputs[5].style.display = 'none';
    inputs[6].style.display = 'none';
    textsCheckbox[1].style.display = 'none';
    containers[1].style.display = 'none';
}

// Defina uma função que retorna o valor de userLoggedIn
export function getUserLoggedIn() {
    return localStorage.getItem('userLoggedIn');
}