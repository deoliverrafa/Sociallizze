// Lógica para aparecer dados do usuário no perfil extendido

document.addEventListener('DOMContentLoaded', async () => {
    // LÓGICA PARA PEGAR DADOS DO USUÁRIO //
    if (await verifyUserLogged() == true) {
        let dadosUser = await getUserData();

        console.log(dadosUser)
        if (dadosUser) {
            textNick[1].innerHTML = dadosUser.nickName;
        }

        const image = await getUserImage();
        if (image) {
            const imageUrl = URL.createObjectURL(image);
            imageProfile[0].src = imageUrl;
            imageProfile[1].src = imageUrl;
        }
    } else {
        window.location.href = 'index.html'
    }
})
