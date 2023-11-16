// IMPORTANDO AS VARIAVEIS //
import { icons, iconsClose, modals, leftBar, cards } from './variables.js';


// ABRIR O MENU //
icons[0].addEventListener('click', () => {
    modals[2].style.display = 'flex';
    modals[2].style.animation = 'opacityModal .3s ease-in-out forwards';
    leftBar[0].style.animation = 'smoothSideBar .5s ease-in-out forwards';
    cards[2].style.animation = 'none';

    modals[2].addEventListener('click', () => {
        leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
        modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
        setTimeout(() => {
            modals[2].style.display = 'none';
        }, 300);
    })
});

// FECHAR O MENU //
iconsClose[0].addEventListener('click', () => {
    leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards';
    modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[2].style.display = 'none';
    }, 300);
});