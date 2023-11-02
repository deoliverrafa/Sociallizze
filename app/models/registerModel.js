import { buttons, cards, closeLoginMenu, closeRegisterMenu, containers, iconsClose, inputs, modals, showLoginMenu, textError, textSuccess } from "../../public/assets/js/variables";

const birthDayData = document.querySelector('.date')
const nickName = inputs[2]
const userName = inputs[3]
const phoneNumber = inputs[4]
const email = inputs[5]
const password = inputs[6]
const url = `https://sociallizze-api.up.railway.app/api/cadastrar`
let id;

// FUNÇÃO AUTO COMPLETAR NÚMERO //
function regexNumber() {
    let regexNumber = /(\d{2})(\d{5})(\d{4})/;
    
    let numberRegex = phoneNumber.replace(regex, '($1) $2-$3');
    
    return numberRegex;
}
console.log(numberRegex);

const userLoggedIn = localStorage.getItem('userLoggedIn');

document.addEventListener('DOMContentLoaded', () => {
    // LÓGICA PARA APARECER O CARD DE LOGIN //
    if (userLoggedIn !== 'true' && typeof id == "undefined") {
        showLoginMenu()
    } else {
        closeLoginMenu()
    }
})



buttons[1].addEventListener('click', (event) => {
    event.preventDefault();

    let data = {
        nickName: nickName.value,
        userName: userName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        password: password.value,
        birthDayData: birthDayData.value,
        type: "default",
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                // Tratamento de erro na resposta
                // console.error('Erro na solicitação: ' + response.status);
                // res.status(response.status).json({ error: 'Erro na solicitação' });
            }
            return response.json();
        })
        .then(data => {
            // Processar os dados bem-sucedidos
            if (data.error) {
                containers[2].style.display = 'flex'
                textError[1].innerHTML = data.error
            } else {
                id = data._id;
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userId', id)
                closeRegisterMenu()
                modals[3].style.display = 'flex';
                textSuccess[0].innerHTML = 'Conta Registrada com sucesso!!!'
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 1500);
            }

        })
})

// ESCONDER MODAL DE MENSAGEM DE SUCESSO //
iconsClose[3].addEventListener('click', () => {
    modals[3].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    cards[2].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    setTimeout(() => {
        modals[3].style.display = 'none';
    }, 300);
});