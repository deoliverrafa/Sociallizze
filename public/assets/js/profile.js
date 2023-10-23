// IMPORTANDO AS VÁRIAVEIS //
import { getUserData } from '../../../app/models/loginModel.js';
import { itens, modals, iconsClose, cards, leftBar, textNick, buttonLogOut, imageProfile, bio, more } from './variables.js';

let profileOpen = false;
let isExpanded = false;
const charLimit = 25;
const bioText = bio[0].innerText;

itens[0].addEventListener('click', async () => {

    const dadosUser = await loadUserData()
    
    if (!profileOpen) {
        profileOpen = true;
        modals[5].style.display = 'flex';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
        cards[6].style.animation = 'none';
        cards[7].style.animation = 'none';
        textNick[0].innerHTML = dadosUser.nickName
        // imageProfile[0].src = dadosUser.avatar
        setTimeout(() => {
            modals[2].style.display = 'none';
        }, 300);
    }
});


iconsClose[5].addEventListener('click', () => {
    if (profileOpen) {
        modals[5].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        cards[4].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
        setTimeout(() => {
            modals[5].style.display = 'none';
            modals[2].style.display = 'none';
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
}

// ESCONDER BIO - MOSTRAR BIO //
if (bioText.length > charLimit) {
    const truncatedText = bioText.slice(0, charLimit) + '...';
    bio[0].innerText = truncatedText;

    more[0].addEventListener('click', () => {
        if (isExpanded) {
            bio[0].innerText = truncatedText;
            more[0].innerText = 'MAIS';
        } else {
            bio[0].innerText = bioText;
            more[0].innerText = 'MENOS';
        }
        isExpanded = !isExpanded;
    });
}