// IMPORTANDO AS VARIÁVEIS //
import { body, selects} from './variables.js';

// VARIÁVEIS//
let themeSelected;
let theme;

// FUNÇÃO - APLICAR TEMA //
function applyTheme() {
    if (theme === 'dark') {
        body.style.background = '#000000';
        document.querySelectorAll('.profile').forEach(function(element) {
            element.style.background = '#000000';
        });
        document.querySelectorAll('.left-bar').forEach(function(element) {
            element.style.background = '#000000';
        });
        document.querySelectorAll('.top').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.header').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.card').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.top').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.main').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.bottom').forEach(function(element) {
            element.style.background = '#1A1A1A';
        });
        document.querySelectorAll('.input').forEach(function(element) {
            element.style.background = '#2C2C2C';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.select').forEach(function(element) {
            element.style.background = '#2C2C2C';
            element.style.color = 'rgba(255,255,255,.5)';
        });
        document.querySelectorAll('.option').forEach(function(element) {
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.date').forEach(function(element) {
            element.style.background = '#2C2C2C';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.item').forEach(function(element) {
            element.style.background = '#2C2C2C';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.user').forEach(function(element) {
            element.style.background = '#2C2C2C';
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.icon').forEach(function(element) {
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.icon-input').forEach(function(element) {
            element.style.background = '#2C2C2C';
        });
        document.querySelectorAll('.text').forEach(function(element) {
            element.style.color = '#FFFFFF';
        });
        document.querySelectorAll('.text-error').forEach(function(element) {
            element.style.color = '#E05135';
        });
    } else {
        body.style.background = '';
        document.querySelectorAll('.profile').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.left-bar').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.top').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.header').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.card').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.top').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.main').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.bottom').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.input').forEach(function(element) {
            element.style.background = '';
            element.style.color = '';
        });
        document.querySelectorAll('.select').forEach(function(element) {
            element.style.background = '';
            element.style.color = '';
        });
        document.querySelectorAll('.date').forEach(function(element) {
            element.style.background = '';
            element.style.color = '';
        });
        document.querySelectorAll('.item').forEach(function(element) {
            element.style.background = '';
            element.style.color = '';
        });
        document.querySelectorAll('.user').forEach(function(element) {
            element.style.background = '';
            element.style.color = '';
        });
        document.querySelectorAll('.icon').forEach(function(element) {
            element.style.color = '';
        });
        document.querySelectorAll('.icon-input').forEach(function(element) {
            element.style.background = '';
        });
        document.querySelectorAll('.text').forEach(function(element) {
            element.style.color = '';
        });
        document.querySelectorAll('.text-error').forEach(function(element) {
            element.style.color = '';
        });
    }
}

// SELECIONA TEMA //
document.addEventListener('DOMContentLoaded', function () {
    // SELECIONA TEMA //
    if (selects[0]) {
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
    }

    // DEFINE TEMA PADRÃO //
    theme = localStorage.getItem('themeSelected');
    if (theme === null) {
        theme = 'light';
    }

    // CARREGA O TEMA //
    applyTheme();
});

export { theme };