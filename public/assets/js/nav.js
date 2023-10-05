// VARIAVEIS //
const icons = document.querySelectorAll('.icon');
const modals = document.querySelectorAll('.modal');

// CLICK - MENU //
icons[0].addEventListener('click', () => {
    modals[0].style.display = 'flex';
});

// CLICK - X //
icons[1].addEventListener('click', () => {
    modals[0].style.display = 'none';
});
