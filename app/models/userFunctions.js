let localUserId = localStorage.getItem('userId')
let userLoggedIn = localStorage.getItem('userLoggedIn')

async function verifyUserLogged() {
    let status;
    if (localUserId == 'null' || userLoggedIn == 'false') {
        status = false
    } else {
        status = true
    }
    return status;
}

async function getUserImage(userId) {
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

async function getUserData(userId, fields) {
    const url = `https://sociallizze-api.up.railway.app/api/searchById?id=${userId}&fields=${fields}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            console.log("Erro ao pegar dados do usuário");
            return null;
        }

        return await response.json();
    } catch (error) {
        console.log("Erro ao pegar userData", error);
        return null;
    }
}

function setLocalUserId(value) {
    localStorage.setItem('userId', `${value}`)
}

function setLocalUserLoggedIn(value) {
    localStorage.setItem('userLoggedIn', `${value}`)
}

export { getUserData, getUserImage, localUserId, logOut, userLoggedIn, verifyUserLogged, setLocalUserLoggedIn, setLocalUserId };

