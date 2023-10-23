// IMPORTANDO AS VARIAVEIS //
import { icons, iconsClose, modals, leftBar, logos, cards } from './variables.js';

const logoAnimate = document.querySelectorAll('.logo-animate');
let logoCount = 0;

// ABRIR O MENU //
icons[0].addEventListener('click', () => {
    modals[2].style.display = 'flex';
    modals[2].style.animation = 'opacityModal .3s ease-in-out forwards';
    leftBar[0].style.animation = 'smoothSideBar .5s ease-in-out forwards'; 
    cards[2].style.animation = 'none';
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
    if(logoCount == 0) {
       setTimeout(() => {
           logoAnimate[1].style.display = 'flex';
       }, 200);
       setTimeout(() => {
           logoAnimate[2].style.display = 'flex';
       }, 400);
       setTimeout(() => {
           logoAnimate[3].style.display = 'flex';
       }, 600);
       setTimeout(() => {
           logoAnimate[4].style.display = 'flex';
       }, 800);
       setTimeout(() => {
           logoAnimate[5].style.display = 'flex';
       }, 1000);
       setTimeout(() => {
           logoAnimate[6].style.display = 'flex';
       }, 1200);
       setTimeout(() => {
           logoAnimate[7].style.display = 'flex';
       }, 1400);
       setTimeout(() => {
           logoAnimate[8].style.display = 'flex';
       }, 1600);
       setTimeout(() => {
           logoAnimate[9].style.display = 'flex';
       }, 1800);
       setTimeout(() => {
           logoAnimate[10].style.display = 'flex';
       }, 2000);
       setTimeout(() => {
           logoCount++;
       }, 1000);
    };
});