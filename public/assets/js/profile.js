// IMPORTANDO AS VÁRIAVEIS //
import { itens, modals, iconsClose, cards, leftBar, textNick, buttonLogOut, bios, mores } from './variables.js';

let profileOpen = false;
let isExpanded = false;
const charLimit = 20;
const bioText = bios[0].innerText;

itens[0].addEventListener('click', async () => {
    if (!profileOpen) {
        profileOpen = true;
        modals[5].style.display = 'flex';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
        cards[6].style.animation = 'none';
        cards[7].style.animation = 'none';

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
            cards[4].style.animation = 'smoothUpCard .5s ease-in-out forwards';
            modals[5].style.animation = 'opacityModal .3s ease-in-out forwards';
            profileOpen = false;
        }, 300);
    }
});

// REMOVER ANIMAÇÕES //
cards[8].style.animation = 'none';
cards[9].style.animation = 'none';
cards[10].style.animation = 'none';
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