// IMPORTANDO AS VARIAVEIS //
import { icons, iconsClose, modals, leftBar } from './variables.js';

// ABRIR O MENU //
icons[0].addEventListener('click', () => {
    modals[1].style.display = 'flex';
    modals[1].style.animation = 'opacityModal .3s ease-in-out forwards';
    leftBar[0].style.animation = 'smoothSideBar .5s ease-in-out forwards'; 
});

// FECHAR O MENU //
iconsClose[1].addEventListener('click', () => {
    leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards'; 
    modals[1].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[1].style.display = 'none';
    }, 300);
});