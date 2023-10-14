import { buttons, inputs } from "../../public/assets/js/variables.js";

const birthDayData = document.querySelector('.date')

const nickName = inputs[2]
const userName = inputs[3]
const phoneNumber = inputs[4]
const email = inputs[5]
const password = inputs[6]

const url = `http://localhost:3000/api/cadastrar`

buttons[1].addEventListener('click', () => {
    const data = {
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
        console.log(data)
        window.location.href = 'index.html'
        alert("Usuário criado com sucesso")
    })
    .catch(error => {
        // Tratar erros aqui e enviar uma resposta de erro
        // console.error('Erro:', error);
        // res.status(500).json({ error: 'Erro no servidor' });
    });
    }); 