// IMPORTANDO AS VÁRIAVEIS //
import { getUserData } from '../../../app/models/loginModel.js';
import { itens, modals, iconsClose, cards, leftBar, textNick, buttonLogOut } from './variables.js';

let profileOpen = false;

itens[0].addEventListener('click', async () => {

    const dadosUser = await loadUserData()

    if (!profileOpen) {
        modals[5].style.display = 'flex';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
        
        
        textNick[0].innerHTML = dadosUser.nickName
        setTimeout(() => {
            modals[2].style.display = 'none';
        }, 300);
        profileOpen = true;
    }
});

iconsClose[5].addEventListener('click', () => {
    if (profileOpen) {
        cards[4].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
        modals[5].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        setTimeout(() => {
            modals[5].style.display = 'none';
            // Redefinindo as animações
            cards[4].style.animation = 'smoothUpCard .5s ease-in-out forwards';
            modals[5].style.animation = 'opacityModal .3s ease-in-out forwards';
            profileOpen = false;
        }, 300);
    }
});

buttonLogOut[0].addEventListener('click', async () => {
    logOut()
    window.location.href = 'index.html'
})

async function loadUserData() {
    try {
        let userData = await getUserData();
        return userData
    }
    catch (error) {
        console.log("Erro ao carregar dados: ", error);
    }
}

async function logOut(){
    localStorage.setItem('userLoggedIn', 'false')
    localStorage.setItem('userId', null)
    return "Unlogged"
}
console.log(localStorage.getItem("userLoggedIn"))
console.log(localStorage.getItem("userId"))