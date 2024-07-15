import { printCharacters } from './printCharacters.js';
import { addCharacters } from './addCharacters.js';

const btnClear = document.querySelector("#btnClear");
const form = document.querySelector('form');

form.addEventListener("submit", evento => {
    addCharacters(evento);
    form.reset()
});

btnClear.addEventListener('click', () => {
    form.reset();
});