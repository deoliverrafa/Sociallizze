// IMPORTANDO AS VÁRIAVEIS //
import { itens, modals, iconsClose, cards, leftBar } from './variables.js';

let profileOpen = false;

itens[0].addEventListener('click', () => {
    if (!profileOpen) {
        modals[5].style.display = 'flex';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards'; 
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
            // Redefina as animações
            cards[4].style.animation = 'none';
            modals[5].style.animation = 'none';
            profileOpen = false;
        }, 300);
    }
});
