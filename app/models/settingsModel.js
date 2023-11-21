    import { checkboxs } from '../../public/assets/js/variables'
    import { localUserId } from './userFunctions'


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
        const birthDayData = checkboxs[1].value;

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
        const phoneNumber = checkboxs[2].value;

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
        const email = checkboxs[3].value;

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