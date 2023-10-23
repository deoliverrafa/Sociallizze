// IMPORTANDO AS VÁRIAVEIS //
import { getUserData } from '../../../app/models/loginModel.js';
import { itens, modals, iconsClose, cards, leftBar, textNick, buttonLogOut, imageProfile, bios, mores } from './variables.js';

let profileOpen = false;
let isExpanded = false;
const charLimit = 35;
const bioText = bios[0].innerText;

itens[0].addEventListener('click', async () => {
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
    const dadosUser = await loadUserData()

    window.location.href = 'index.html'
})

// ESCONDER BIO - MOSTRAR BIO //
if (bioText.length > charLimit) {
    const truncatedText = bioText.slice(0, charLimit) + '...';
    bios[0].innerText = truncatedText;

    mores[0].addEventListener('click', () => {
        if (isExpanded) {
            bios[0].innerText = truncatedText;
            mores[0].innerText = 'MAIS';
        } else {
            bios[0].innerText = bioText;
            mores[0].innerText = 'MENOS';
        }
        isExpanded = !isExpanded;
    });
}