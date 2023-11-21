import { checkboxs } from '../../public/assets/js/variables'
import { localUserId, verifyUserLogged, getUserData } from './userFunctions'

let dadosUser;

const logoLoading = document.querySelectorAll('.logo.rotate')
const divLoading = document.getElementById('loader')
const cardPrincipal = document.querySelectorAll('.card');

console.log(cardPrincipal);
console.log(logoLoading);
console.log(divLoading);

document.addEventListener('DOMContentLoaded', async () => {


    // INICIA A LÓGICA DO INDICADOR DE CARREGAMENTO
    cardPrincipal[0].style.display = 'none';
    divLoading.style.display = 'flex';
    logoLoading[0].style.animation = 'rotate .3s infinite linear';
    loader.style.display = 'flex'; // Mostra o indicador de carregamento


    if (await verifyUserLogged() == true) {
        dadosUser = await getUserData(localUserId, 'showEmail,showBirthDayData,showNacionality,showPhoneNumber');

        console.log(dadosUser)

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
        const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings', {
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

        console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
});

checkboxs[1].addEventListener('change', async () => {
    const birthDayData = checkboxs[1].checked;

    try {
        const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings', {
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

        console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})

checkboxs[2].addEventListener('change', async () => {
    const phoneNumber = checkboxs[2].checked;

    try {
        const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings', {
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

        console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})
checkboxs[3].addEventListener('change', async () => {
    const email = checkboxs[3].checked;

    try {
        const response = await fetch('https://sociallizze-api.up.railway.app/api/modifySettings', {
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

        console.log(data);
    } catch (error) {
        console.log('Erro na requisição:', error);
    }
})