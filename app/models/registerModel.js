import { buttons, inputs, modals, iconsClose, cards, closeRegisterMenu, textSuccess, containers, textError } from "../../public/assets/js/variables.js";

const birthDayData = document.querySelector('.date')
const nickName = inputs[2]
const userName = inputs[3]
const phoneNumber = inputs[4]
const email = inputs[5]
const password = inputs[6]
const url = `http://localhost:3000/api/cadastrar`

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
                closeRegisterMenu()
                alert("Usuário cadastrado com sucesso")
                modals[3].style.display = 'flex';
                textSuccess[0].innerHTML = 'Conta Registrada com sucesso!!!'   
            }

    })    
})


// ESCONDER MODAL DE MENSAGEM DE SUCESSO //
iconsClose[3].addEventListener('click', () => {
    modals[3].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    cards[2].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    setTimeout( () => {
        modals[3].style.display = 'none';
    }, 300);
});
