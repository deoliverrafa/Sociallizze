// IMPORTANDO AS VARIÁVEIS//
import { fabs, icons } from './variables.js';


// MOSTRAR OS FABS //
fabs[4].addEventListener('click', () => {
    fabs[0].style.display = 'flex';
    fabs[1].style.display = 'flex';
    fabs[2].style.display = 'flex';
    fabs[3].style.display = 'flex';
    fabs[4].style.display = 'none';
    icons[27].style.animation = 'rotate .3s ease-in-out forwards';
});

// ESCONDER OS FABS //
fabs[3].addEventListener('click', () => {
    fabs[0].style.display = 'none';
    fabs[1].style.display = 'none';
    fabs[2].style.display = 'none';
    fabs[3].style.display = 'none';
    fabs[4].style.display = 'flex';
    icons[26].style.animation = 'rotate .3s ease-in-out forwards';
});