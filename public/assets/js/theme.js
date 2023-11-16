// IMPORTANDO AS VARIÁVEIS //
import { body, selects} from './variables.js';

// VARIÁVEIS//
let themeSelected;
let theme;

// FUNÇÃO - APLICAR TEMA //
function applyTheme() {
    if (theme === 'dark') {
        selects[0].value = 'Dark';
        body.style.background = '#0E2A56';
        document.querySelectorAll('.header').forEach(function(element) {
            element.style.background = '#101F34';
        });
        document.querySelectorAll('.card').forEach(function(element) {
            element.style.background = '#101F34';
        });
        document.querySelectorAll('.logo').forEach(function(element) {
            element.style.color = '#0076CC';
        });
        document.querySelectorAll('.input').forEach(function(element) {
            element.style.background = '#0E2A56';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.select').forEach(function(element) {
            element.style.background = '#0E2A56';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.date').forEach(function(element) {
            element.style.background = '#0E2A56';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.icon').forEach(function(element) {
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.icon-input').forEach(function(element) {
            element.style.background = '#0E2A56';
        });
        document.querySelectorAll('.text').forEach(function(element) {
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.text-primary').forEach(function(element) {
            element.style.color = '#0076CC';
        });
        document.querySelectorAll('.title-primary').forEach(function(element) {
            element.style.color = '#0076CC';
        });
        document.querySelectorAll('.link-primary').forEach(function(element) {
            element.style.color = '#0076CC';
        });
    } else {
        body.style.background = '';
    }
}

// SELECIONA TEMA //
selects[0].addEventListener('change', function () {
    themeSelected = this.value;

    switch (themeSelected) {
        case 'Light':
            localStorage.setItem('themeSelected', 'light');
            theme = localStorage.getItem('themeSelected');
            break;
        case 'Dark':
            localStorage.setItem('themeSelected', 'dark');
            theme = localStorage.getItem('themeSelected');
            break;
    }
    // DEFINE O TEMA //
    applyTheme();
});

// DEFINE TEMA PADRÃO //
theme = localStorage.getItem('themeSelected');
if (theme === null) {
    theme = 'light';
}

// CARREGA O TEMA //
applyTheme();