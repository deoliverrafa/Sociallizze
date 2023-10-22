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
const textsCheckbox = document.querySelectorAll('.text-checkbox');
const links = document.querySelectorAll('.link');
const linksRegister = document.querySelectorAll('.linkRegister');
const buttonsSelect = document.querySelectorAll('.buttonSelect');
const buttons = document.querySelectorAll('.button');
const buttonsSubmit = document.querySelectorAll('.buttonSubmit');
const textSuccess = document.querySelectorAll('.text-success');
const itens = document.querySelectorAll('.item');
const logos = document.querySelectorAll('.logo');
const textNick = document.querySelectorAll('.nick')
const buttonLogOut = document.querySelectorAll('.button.logout')

// FUNÇÕES //
let showLoginMenu = (() => {
    modals[0].style.display = 'flex';
    modals[0].style.animation = 'opacityModal .3s ease-in-out forwards';
    cards[0].style.animation = 'smoothUpCard .5s ease-in-out forwards';
});

let showRegisterMenu = ( () => {
    modals[1].style.display = 'flex';
    modals[1].style.animation = 'opacityModal .3s ease-in-out forwards';
    cards[1].style.animation = 'smoothUpCard .5s ease-in-out forwards';
});

let closeLoginMenu = (() => {
    cards[0].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    modals[0].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    setTimeout(() => {
        modals[0].style.display = 'none';
    }, 300);
})

let closeRegisterMenu = ( () => {
    modals[1].style.animation = 'closeOpacityModal .3s ease-in-out forwards';
    cards[1].style.animation = 'closeSmoothUpCard .5s ease-in-out forwards';
    setTimeout( () => {
        modals[1].style.display = 'none';
    }, 300);
});

let nextButton = ( (count) => {
    if(count == 1) {
        buttonsSelect[1].style.display = 'flex';
        buttonsSelect[1].style.justifyContent = 'center';
        buttonsSelect[1].style.alignItems = 'center';
        inputs[2].style.display = 'none';
        inputs[3].style.display = 'none';
        inputs[4].style.display = 'flex';
        inputs[5].style.display = 'flex';
        inputs[6].style.display = 'flex';
        textsCheckbox[1].style.display = 'flex';
        containers[1].style.display = 'none';
    }
    if(count == 2) {
        buttonsSelect[1].style.display = 'flex';
        buttonsSelect[1].style.justifyContent = 'center';
        buttonsSelect[1].style.alignItems = 'center';
        buttonsSelect[0].style.display = 'none';
        buttonsSubmit[1].style.display = 'flex';
        buttonsSubmit[1].style.justifyContent = 'center';
        buttonsSubmit[1].style.alignItems = 'center';
        inputs[2].style.display = 'none';
        inputs[3].style.display = 'none';
        inputs[4].style.display = 'none';
        inputs[5].style.display = 'none';
        inputs[6].style.display = 'none';
        textsCheckbox[1].style.display = 'none';
        containers[1].style.display = 'flex';
        containers[1].style.flexDirection = 'column';
        containers[1].style.justifyContent = 'center';
        containers[1].style.alignItems = 'center';
    }
});

let previousButton = ( (count) => {
    if(count == 0) {
        buttonsSelect[1].style.display = 'none';
        buttonsSubmit[1].style.display = 'none';
        inputs[2].style.display = 'flex';
        inputs[3].style.display = 'flex';
        inputs[4].style.display = 'none';
        inputs[5].style.display = 'none';
        inputs[6].style.display = 'none';
        textsCheckbox[1].style.display = 'none';
        containers[1].style.display = 'none';
    }
    if(count == 1) {
        buttonsSelect[0].style.display = 'flex';
        buttonsSelect[0].style.justifyContent = 'center';
        buttonsSelect[0].style.alignItems = 'center';
        buttonsSelect[1].style.display = 'flex';
        buttonsSelect[1].style.justifyContent = 'center';
        buttonsSelect[1].style.alignItems = 'center';
        buttonsSubmit[1].style.display = 'none';
        buttonsSubmit[1].style.justifyContent = 'center';
        buttonsSubmit[1].style.alignItems = 'center';
        inputs[2].style.display = 'none';
        inputs[3].style.display = 'none';
        inputs[4].style.display = 'flex';
        inputs[5].style.display = 'flex';
        inputs[6].style.display = 'flex';
        textsCheckbox[1].style.display = 'flex';
        containers[1].style.display = 'none';
    }
});

// EXPORTANDO AS VARIAVEIS //
export { icons, iconsClose, modals, leftBar, cards, containers, textError, showLoginMenu, showRegisterMenu, closeLoginMenu, closeRegisterMenu, textSuccess, inputs, checkboxs, links, linksRegister, buttonsSelect, buttons, textsCheckbox, previousButton, nextButton, buttonsSubmit, itens, logos, textNick, buttonLogOut };