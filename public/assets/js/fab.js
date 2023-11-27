// IMPORTANDO AS VARIÁVEIS//
import { fabs, icons } from './variables.js';

// MOSTRAR OS FABS //
fabs[2].addEventListener('click', () => {
    fabs[0].style.display = 'flex';
    fabs[1].style.display = 'flex';
    fabs[2].style.display = 'none';
    icons[15].style.animation = 'rotate .3s ease-in-out forwards';
});

// ESCONDER OS FABS //
fabs[1].addEventListener('click', () => {
    fabs[0].style.display = 'none';
    fabs[1].style.display = 'none';
    fabs[2].style.display = 'flex';
    icons[16].style.animation = 'rotate .3s ease-in-out forwards';
});