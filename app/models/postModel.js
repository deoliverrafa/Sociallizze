const { textNick, inputs } = require("../../public/assets/js/variables");
const { userLoggedIn, getUserData, getUserImage, localUserId } = require("./userFunctions");

let textValue;

const imgProfile = document.querySelector('.image.profile-small')

document.addEventListener('DOMContentLoaded', async () => {

    if (userLoggedIn) {
       
        const dadosUser = await getUserData(localUserId);

        if (dadosUser) {
            textNick[0].innerHTML = dadosUser.nickName
        }

        const img = await getUserImage(localUserId);

        if (img.type == 'image/png') {
            imgProfile.src = URL.createObjectURL(img)
        } else {
            imgProfile.src = '../../public/assets/images/user/user.png'
        }

    }

})

inputs[0].addEventListener('input', () =>{
    textValue = inputs[0].value;
})

