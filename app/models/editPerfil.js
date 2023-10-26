import { profileOpen } from "../../public/assets/js/profile";
import { cards, iconsClose, itens, modals, icons, containers, headers, imageProfile } from "../../public/assets/js/variables";


itens[11].addEventListener('click', async () => {
    modals[6].style.display = 'flex'
    modals[5].style.display = 'none';
})

iconsClose[6].addEventListener('click', () => {
    modals[6].style.display = 'none';
    profileOpen = false;
});

console.log("Modais: ",modals)

console.log("Cards: ", cards)

console.log("Iten: ", itens)

console.log("Icones-X: ", iconsClose)

console.log("Icones: ", icons)

console.log("Container: ", containers)

console.log("Header: ", headers)