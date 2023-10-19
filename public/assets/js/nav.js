// IMPORTANDO AS VARIAVEIS //
import { icons, iconsClose, modals, leftBar, logos } from './variables.js';

const logoAnimate = document.querySelectorAll('.logo-animate');

// ABRIR O MENU //
icons[0].addEventListener('click', () => {
    modals[2].style.display = 'flex';
    modals[2].style.animation = 'opacityModal .3s ease-in-out forwards';
    leftBar[0].style.animation = 'smoothSideBar .5s ease-in-out forwards'; 
});

// FECHAR O MENU //
iconsClose[2].addEventListener('click', () => {
    leftBar[0].style.animation = 'closeSmoothSideBar .5s ease-in-out forwards'; 
    modals[2].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[2].style.display = 'none';
    }, 300);
});

// EFEITO MOSTRA LOGO COMPLETO //
logos[0].addEventListener('mouseover', () => {
    setTimeout(() => {
        logoAnimate[0].style.display = 'flex';
        logoAnimate[0].style.animation = 'fade 1.5s ease-in-out forwards 0ms';
    }, 0);
    setTimeout(() => {
        logoAnimate[1].style.display = 'flex';
        logoAnimate[1].style.animation = 'fade 1.5s ease-in-out forwards 25ms';
    }, 200);
    setTimeout(() => {
        logoAnimate[2].style.display = 'flex';
        logoAnimate[2].style.animation = 'fade 1.5s ease-in-out forwards 50ms';
    }, 400);
    setTimeout(() => {
        logoAnimate[3].style.display = 'flex';
        logoAnimate[3].style.animation = 'fade 1.5s ease-in-out forwards 75ms';
    }, 600);
    setTimeout(() => {
        logoAnimate[4].style.display = 'flex';
        logoAnimate[4].style.animation = 'fade 1.5s ease-in-out forwards 100ms';
    }, 800);
    setTimeout(() => {
        logoAnimate[5].style.display = 'flex';
        logoAnimate[5].style.animation = 'fade 1.5s ease-in-out forwards 125ms';
    }, 1000);
    setTimeout(() => {
        logoAnimate[6].style.display = 'flex';
        logoAnimate[6].style.animation = 'fade 1.5s ease-in-out forwards 150ms';
    }, 1200);
    setTimeout(() => {
        logoAnimate[7].style.display = 'flex';
        logoAnimate[7].style.animation = 'fade 1.5s ease-in-out forwards 175ms';
    }, 1400);
    setTimeout(() => {
        logoAnimate[8].style.display = 'flex';
        logoAnimate[8].style.animation = 'fade 1.5s ease-in-out forwards 200ms';
    }, 1600);
    setTimeout(() => {
        logoAnimate[9].style.display = 'flex';
        logoAnimate[9].style.animation = 'fade 1.5s ease-in-out forwards 225ms';
    }, 1800);
    setTimeout(() => {
        logoAnimate[10].style.display = 'flex';
        logoAnimate[10].style.animation = 'fade 1.5s ease-in-out forwards 250ms';
    }, 2000);
});

// EFEITO ESCONDER LOGO COMPLETO //
logos[0].addEventListener('mouseout', () => {
    setTimeout(() => {
        logoAnimate[10].style.animation = 'fade 1.5s ease-in-out forwards 0ms';
        setTimeout(() => {
            logoAnimate[10].style.display = 'none';
        }, 300);
    }, 0);
    setTimeout(() => {
        logoAnimate[9].style.animation = 'fade 1.5s ease-in-out forwards 25ms';
        setTimeout(() => {
            logoAnimate[9].style.display = 'none';
        }, 300);
    }, 200);
    setTimeout(() => {
        logoAnimate[8].style.animation = 'fade 1.5s ease-in-out forwards 50ms';
        setTimeout(() => {
            logoAnimate[8].style.display = 'none';
        }, 300);
    }, 400);
    setTimeout(() => {
        logoAnimate[7].style.animation = 'fade 1.5s ease-in-out forwards 75ms';
        setTimeout(() => {
            logoAnimate[7].style.display = 'none';
        }, 300);
    }, 600);
    setTimeout(() => {
        logoAnimate[6].style.animation = 'fade 1.5s ease-in-out forwards 100ms';
        setTimeout(() => {
            logoAnimate[6].style.display = 'none';
        }, 300);
    }, 800);
    setTimeout(() => {
        logoAnimate[5].style.animation = 'fade 1.5s ease-in-out forwards 125ms';
        setTimeout(() => {
            logoAnimate[5].style.display = 'none';
        }, 300);
    }, 1000);
    setTimeout(() => {
        logoAnimate[4].style.animation = 'fade 1.5s ease-in-out forwards 150ms';
        setTimeout(() => {
            logoAnimate[4].style.display = 'none';
        }, 300);
    }, 1200);
    setTimeout(() => {
        logoAnimate[3].style.animation = 'fade 1.5s ease-in-out forwards 175ms';
        setTimeout(() => {
            logoAnimate[3].style.display = 'none';
        }, 300);
    }, 1400);
    setTimeout(() => {
        logoAnimate[2].style.animation = 'fade 1.5s ease-in-out forwards 200ms';
        setTimeout(() => {
            logoAnimate[2].style.display = 'none';
        }, 300);
    }, 1600);
    setTimeout(() => {
        logoAnimate[1].style.animation = 'fade 1.5s ease-in-out forwards 225ms';
        setTimeout(() => {
            logoAnimate[1].style.display = 'none';
        }, 300);
    }, 1800);
    setTimeout(() => {
        logoAnimate[0].style.animation = 'fade 1.5s ease-in-out forwards 250ms';
        setTimeout(() => {
            logoAnimate[0].style.display = 'flex';
        }, 300);
    }, 2000);;
});