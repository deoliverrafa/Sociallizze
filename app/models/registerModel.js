import { buttons, cards, closeLoginMenu, closeRegisterMenu, containers, iconsClose, inputs, modals, showLoginMenu, textError, textSuccess, dates, selects } from "../../public/assets/js/variables";

console.log(selects)

const birthDayData = document.querySelector('.date')
const nacionality = selects[0]
const nickName = inputs[2]
const userName = inputs[3]
const phoneNumber = inputs[4]
const email = inputs[5]
const password = inputs[6]
const url = `https://sociallizze-api.up.railway.app/api/cadastrar`
let id;

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
        nacionality: nacionality.value,
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
                console.error('Erro na solicitação: ' + response.status);
                res.status(response.status).json({ error: 'Erro na solicitação' });
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
iconsClose[2].addEventListener('click', () => {
    modals[3].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    cards[2].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    setTimeout(() => {
        modals[3].style.display = 'none';
    }, 300);
});

// DATA MÍNIMA - DATA MÁXIMA //
if (dates[0]) {
    const dateMax = new Date();
    dateMax.setFullYear(dateMax.getFullYear() - 14);
    const dateMin = new Date();
    dateMin.setFullYear(dateMin.getFullYear() - 100);

    const maxDate = new Date(dateMax);
    maxDate.setDate(dateMax.getDate());
    const minDate = new Date(dateMin);
    minDate.setDate(dateMin.getDate());

    const dateMaxFormatted = maxDate.toISOString().split('T')[0];
    const dateMinFormatted = minDate.toISOString().split('T')[0];

    dates[0].setAttribute('max', dateMaxFormatted);
    dates[0].setAttribute('min', dateMinFormatted);

    dates[0].addEventListener('input', function () {
        const dateSelected = dates[0].value;
    });
}

// SELECIONAR NACIONALIDADE //
let regexNumber = '';
let regexFormat = '';
let maxLength = '';
selects[0].addEventListener('change', function () {
    const nationalitySelected = this.value;

    switch (nationalitySelected) {
        case 'BR':
            regexNumber = /(\d{2})(\d{5})(\d{4})/;
            regexFormat = '($1) $2-$3';
            maxLength = '13';
            break;
        case 'US':
            regexNumber = /(\d{3})(\d{3})(\d{4})/;
            regexFormat = '($1) $2-$3';
            maxLength = '13';
            break;
    }
});

// REGEX - FORMATAR NÚMERO
function formatPhoneNumber() {
    if (regexNumber) {
        let formattedNumber = phoneNumber.value.replace(regexNumber, regexFormat);
        phoneNumber.value = formattedNumber;
        phoneNumber.setAttribute('maxlength', maxLength);
    }
}

phoneNumber.addEventListener('input', function () {
    formatPhoneNumber();
});

// REGEX - FORMATAR NOME //
function formatName() {
    let userNameSplit = userName.value.split(' ');

    for (let i = 0; i < userNameSplit.length; i++) {
        userNameSplit[i] = userNameSplit[i].charAt(0).toUpperCase() + userNameSplit[i].slice(1);
    }

    let formattedName = userNameSplit.join(' ');
    userName.value = formattedName;
}

userName.addEventListener('input', function () {
    formatName();
});
