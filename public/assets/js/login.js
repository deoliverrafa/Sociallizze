// IMPORTANDO AS VÁRIAVEIS //
import { iconsClose, modals, cards } from './variables.js';

// LÓGICA PARA APARECER O CARD DE LOGIN //
if(typeof id == 'undefined') {
    modals[0].style.display = 'flex';
    modals[0].style.animation = 'opacityModal .3s ease-in-out forwards';
    cards[0].style.animation = 'smoothUpCard .5s ease-in-out forwards';
}

// FECHAR O CARD //
iconsClose[0].addEventListener('click', () => {
    cards[0].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards'; 
    modals[0].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[0].style.display = 'none';
    }, 300);
});