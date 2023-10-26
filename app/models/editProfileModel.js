import { profileOpen } from "../../public/assets/js/profile";
import { cards, iconsClose, itens, modals, icons, containers, headers, imageProfile, alts, cancels } from "../../public/assets/js/variables";


itens[11].addEventListener('click', async () => {
    modals[6].style.display = 'flex'
    modals[5].style.display = 'none';
})

iconsClose[6].addEventListener('click', () => {
    modals[6].style.display = 'none';
    profileOpen = false;
});

// ESCONDE OS INPUTS DE TROCAR DE SENHA //
containers[37].style.display = 'none';
containers[38].style.display = 'none';

// MOSTRAR OS INPUTS DE TROCAR DE SENHA //
alts[0].addEventListener('click', () => {
    containers[37].style.display = 'flex';
    containers[38].style.display = 'none';
});

// CANCELA MUDANÇAS //
cancels[0].addEventListener('click', () => {
    window.location.href = 'index.html';
});

console.log("Modais: ",modals)

console.log("Cards: ", cards)

console.log("Iten: ", itens)

console.log("Icones-X: ", iconsClose)

console.log("Icones: ", icons)

console.log("Container: ", containers)

console.log("Header: ", headers)

console.log('Botões: ', buttons)