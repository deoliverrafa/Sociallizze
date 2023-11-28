import { buttons, checkboxs, containers, inputs, links, modalSuccess, showSuccessMessage, textError } from '../../public/assets/js/variables'
import { localUserId, verifyUserLogged, getUserData, userLoggedIn, setLocalUserId, setLocalUserLoggedIn } from './userFunctions'

let dadosUser;
let password;
let newPassword;

const logoLoading = document.querySelectorAll('.logo.rotate')
const divLoading = document.getElementById('loader')
const cardPrincipal = document.querySelectorAll('.card');

modalSuccess[0].style.display = 'none';
buttons[0].style.display = 'none';
buttons[1].style.display = 'none';

// CONTAINER SENHA
containers[5].style.display = 'none';

// CONTAINER NOVA SENHA
containers[6].style.display = 'none';

// CONTAINER ERROR
containers[7].style.display = 'none';

document.addEventListener('DOMContentLoaded', async () => {


    // INICIA A LÓGICA DO INDICADOR DE CARREGAMENTO
    cardPrincipal[0].style.display = 'none';
    divLoading.style.display = 'flex';
    logoLoading[0].style.animation = 'rotate .3s infinite linear';
    loader.style.display = 'flex'; // Mostra o indicador de carregamento


    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData(localUserId, 'showEmail,showBirthDayData,showNacionality,showPhoneNumber');

        console.log(dadosUser);
        checkboxs[0].checked = dadosUser.showNacionality;
        checkboxs[1].checked = dadosUser.showBirthDayData;
        checkboxs[2].checked = dadosUser.showPhoneNumber;
        checkboxs[3].checked = dadosUser.showEmail;

        // FINALIZA A LÓGICA DO INDICADOR DE CARREGAMENTO

        cardPrincipal[0].style.display = 'flex';
        divLoading.style.display = 'none';
        logoLoading[0].style.animation = 'none';
        loader.style.display = 'none'; // Mostra o indicador de carregamento

    } else {
        window.location.href = 'index.html';
    }
})

// EVENTLISTENER PARA PEGAR O VALOR DA CHECKBOX
checkboxs[0].addEventListener('change', async () => {
    const nacionality = checkboxs[0].checked; // Verifica se a checkbox está marcada ou não

    try {
        const response = await fetch('http://localhost:3000/api/modifySettings', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nacionality, localUserId })
        });

        const data = await response.json();
        if (data.error) {
            console.log('Erro', data.error);
        }

        // Tratamento de resposta bem sucedida
        // console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
});

checkboxs[1].addEventListener('change', async () => {
    const birthDayData = checkboxs[1].checked;

    try {
        const response = await fetch('http://localhost:3000/api/modifySettings', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ birthDayData, localUserId })
        });

        const data = await response.json();
        if (data.error) {
            console.log('Erro', data.error);
        }

        // Tratamento de resposta bem sucedida
        // console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})

checkboxs[2].addEventListener('change', async () => {
    const phoneNumber = checkboxs[2].checked;

    try {
        const response = await fetch('http://localhost:3000/api/modifySettings', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber, localUserId })
        });

        const data = await response.json();
        if (data.error) {
            console.log('Erro', data.error);
        }

        // Tratamento de resposta bem sucedida
        // console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})
checkboxs[3].addEventListener('change', async () => {
    const email = checkboxs[3].checked;

    try {
        const response = await fetch('http://localhost:3000/api/modifySettings', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, localUserId })
        });

        const data = await response.json();
        if (data.error) {
            console.log('Erro', data.error);
        }

        // Tratamento de resposta bem sucedida
        // console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})

// LINK PARA ALTERAR A SENHA
links[0].addEventListener('click', async () => {

    containers[5].style.display = 'flex';
    containers[6].style.display = 'flex';
    buttons[0].style.display = 'flex';
    buttons[1].style.display = 'none';

    // INPUT PARA PEGAR A SENHA DO USUÁRIO
    inputs[0].addEventListener('input', function () {
        password = this.value;
    })

    // INPUTS PARA PEGAR A CONFIMAÇÃO DE SENHA
    inputs[1].addEventListener('input', function () {
        newPassword = this.value;
    })

    // BOTÃO DE CONFIRMAÇÃO PARA ALTERAR SENHA
    buttons[0].addEventListener('click', async () => {
        try {

            const dataToSend = { password, localUserId, newPassword };

            const response = await fetch('http://localhost:3000/api/modifyPassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend),
            })

            const data = await response.json();

            console.log(data);
            if (data.error) {
                // IMPRIME NA TELA DO USUÁRIO O ERROR
                containers[7].style.display = 'flex';
                textError[0].innerHTML = data.error;
            } else {
                showSuccessMessage('Senha alterada com sucesso');
                inputs[0].value = '';
                inputs[1].value = '';
            }

        } catch (error) {
            console.log("Error", error);
        }
    })
})

// LINK PARA DELETAR A CONTA
links[1].addEventListener('click', async () => {
    containers[5].style.display = 'flex'
    containers[6].style.display = 'none';

    buttons[0].style.display = 'none';
    buttons[1].style.display = 'flex';

    // INPUT PARA PEGAR A SENHA DO USUÁRIO
    inputs[0].addEventListener('input', function () {
        password = this.value;
    })

    // BOTÃO DE CONFIRMAÇÃO PARA DELETAR CONTA
    buttons[1].addEventListener('click', async () => {

        try {
            const dataToSend = { password, localUserId }

            const response = await fetch('http://localhost:3000/api/delAccount', {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSend),
            })

            const data = response.json();

            if (data.error) {
                containers[7].style.display = 'flex'
                textError[0].innerHTML = data.error
            } else {
                showSuccessMessage('Conta Excluida')
                setLocalUserId('null');
                setLocalUserLoggedIn('false');
                window.location.href = '../../index.html'
            }

        } catch (error) {
            containers[7].style.display = 'flex'
            textError[0].innerHTML = error
        }
    })
})