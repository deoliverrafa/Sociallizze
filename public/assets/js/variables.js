// VARIAVEIS //
const body = document.querySelector('body');
const p = document.querySelector('p');
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
const texts = document.querySelectorAll('.text');
const links = document.querySelectorAll('.link');
const linksRegister = document.querySelectorAll('.linkRegister');
const buttonsSelect = document.querySelectorAll('.buttonSelect');
const buttons = document.querySelectorAll('.button');
const buttonsSubmit = document.querySelectorAll('.buttonSubmit');
const textSuccess = document.querySelectorAll('.text-success');
const modalSuccess = document.querySelectorAll('.modal.success');
const itens = document.querySelectorAll('.item');
const logos = document.querySelectorAll('.logo');
const textNick = document.querySelectorAll('.nick')
const textName = document.querySelectorAll('.name')
const textBio = document.querySelectorAll('.text.bio')
const bios = document.querySelectorAll('.bio');
const buttonLogOut = document.querySelectorAll('.button.logout')
const imageProfile = document.querySelectorAll('.image.profile')
const fabs = document.querySelectorAll('.fab');
const headers = document.querySelectorAll('.header')
const alts = document.querySelectorAll('.alt');
const cancels = document.querySelectorAll('.cancel');
const saves = document.querySelectorAll('.save');
const dates = document.querySelectorAll('.date');
const edits = document.querySelectorAll('.edit');
const selects = document.querySelectorAll('.select');
const textNacionality = document.querySelectorAll('.text.nationality')
const textBirthDayData = document.querySelectorAll('.text.birthday')
const textNumber = document.querySelectorAll('.text.number')
const textEmail = document.querySelectorAll('.text.email')

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

let showSuccessMessage = ((message) => {
    modalSuccess[0].style.display = 'flex';
    textSuccess[0].innerHTML = message;
    setTimeout(() => {
        modalSuccess[0].style.display = 'none';
        window.location.reload();
    }, 1500);
})
let nextButton = ( (count) => {
    if(count == 1) {
        buttonsSelect[1].style.display = 'flex';
        buttonsSelect[1].style.justifyContent = 'center';
        buttonsSelect[1].style.alignItems = 'center';
        textsCheckbox[1].style.display = 'none';
        containers[2].style.display = 'none';
        containers[3].style.display = 'none';
        containers[4].style.display = 'none';
        containers[5].style.display = 'none';
        containers[6].style.display = 'none';
        containers[7].style.display = 'none';
        containers[8].style.display = 'flex';
        inputs[4].style.display = 'none';
        inputs[5].style.display = 'none';
        inputs[6].style.display = 'none';
    }
    if(count == 2) {
        buttonsSelect[1].style.display = 'flex';
        buttonsSelect[1].style.justifyContent = 'center';
        buttonsSelect[1].style.alignItems = 'center';
        buttonsSelect[0].style.display = 'none';
        buttonsSubmit[1].style.display = 'flex';
        buttonsSubmit[1].style.justifyContent = 'center';
        buttonsSubmit[1].style.alignItems = 'center';
        textsCheckbox[1].style.display = 'flex';
        containers[2].style.display = 'none';
        containers[3].style.display = 'none';
        containers[4].style.display = 'none';
        containers[5].style.display = 'flex';
        containers[6].style.display = 'flex';
        containers[7].style.display = 'flex';
        containers[8].style.display = 'none';
        inputs[4].style.display = 'flex';
        inputs[5].style.display = 'flex';
        inputs[6].style.display = 'flex';
    }
});

let previousButton = ( (count) => {
    if(count == 0) {
        buttonsSelect[1].style.display = 'none';
        buttonsSubmit[1].style.display = 'none';
        textsCheckbox[1].style.display = 'none';
        containers[3].style.display = 'flex';
        containers[4].style.display = 'flex';
        containers[5].style.display = 'none';
        containers[6].style.display = 'none';
        containers[7].style.display = 'none';
        containers[8].style.display = 'none';
        inputs[4].style.display = 'none';
        inputs[5].style.display = 'none';
        inputs[6].style.display = 'none';
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
        textsCheckbox[1].style.display = 'none';
        containers[2].style.display = 'none';
        containers[3].style.display = 'none';
        containers[4].style.display = 'none';
        containers[5].style.display = 'none';
        containers[6].style.display = 'none';
        containers[7].style.display = 'none';
        containers[8].style.display = 'flex';
        inputs[4].style.display = 'none';
        inputs[5].style.display = 'none';
        inputs[6].style.display = 'none';
    }
});

// EXPORTANDO AS VARIAVEIS //
export { body, p, icons, iconsClose, modals, leftBar, cards, containers, textError, showLoginMenu, showRegisterMenu, closeLoginMenu, closeRegisterMenu, textSuccess, inputs, checkboxs, texts, links, linksRegister, buttonsSelect, buttons, textsCheckbox, previousButton, nextButton, buttonsSubmit, itens, logos, textNick, buttonLogOut, imageProfile, bios, fabs, headers, alts, cancels, saves, textName, dates, selects, textBirthDayData, textNacionality, textEmail, textNumber, textBio, edits, modalSuccess, showSuccessMessage };