// VARIAVEIS //
const iconsClose = document.querySelectorAll('.icon-close');
const icons = document.querySelectorAll('.icon');
const modals = document.querySelectorAll('.modal');
const leftBar = document.querySelectorAll('.left-bar');
const cards = document.querySelectorAll('.card');
const containers = document.querySelectorAll('.container');
const textError = document.querySelectorAll('.text-error');
const inputs = document.querySelectorAll('.input');
const checkboxs = document.querySelectorAll('.checkbox');

let showLoginMenu = (() => {
    modals[0].style.display = 'flex';
    modals[0].style.animation = 'opacityModal .3s ease-in-out forwards';
    cards[0].style.animation = 'smoothUpCard .5s ease-in-out forwards';
});

let closeLoginMenu = (() => {
    cards[0].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    modals[0].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[0].style.display = 'none';
    }, 300);
})

// EXPORTANDO AS VARIAVEIS //
export { icons, iconsClose, modals, leftBar, cards, containers, textError, showLoginMenu, closeLoginMenu, inputs, checkboxs };
