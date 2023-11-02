let userId = localStorage.getItem('userId')
let userLoggedIn = localStorage.getItem('userLoggedIn')

async function verifyUserLogged() {
    let status;
    if (localStorage.getItem('userId') == null || userLoggedIn == 'false') {
        status = false
    } else {
        status = true
    }
    return status;
}

async function getUserImage() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        return null;
    }

    try {
        const response = await fetch(`https://sociallizze-api.up.railway.app/api/getUserImage?userId=${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const imageBlob = await response.blob();
        return imageBlob;
    } catch (error) {
        alert(error.message);
        console.log(error);
        return null;
    }
}

async function logOut() {
    localStorage.setItem('userLoggedIn', 'false')
    localStorage.setItem('userId', 'null')
}

async function getUserData() {
    return await fetch(`https://sociallizze-api.up.railway.app/api/searchById?id=${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (!response) {
                console.log("Erro ao pegar dados do usuário");
                return null;
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.log("Erro ao pegar userData", error);
            return null;
        });
}

export { getUserData, logOut, verifyUserLogged, getUserImage }