// IMPORTANDO AS VÁRIAVEIS //
import { itens, modals, iconsClose, cards, leftBar } from './variables.js';

// ABRIR O PERFIL //
itens[0].addEventListener('click', () => {
    modals[5].style.display = 'flex';
    leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards'; 
    modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[2].style.display = 'none';
    }, 300);
});

// FECHAR O PERFIL //
iconsClose[5].addEventListener('click', () => {
    cards[4].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards'; 
    modals[5].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[5].style.display = 'none';
    }, 300);
});
