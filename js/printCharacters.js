import { deleteCharacters } from "./deleteCharacters.js";

function printCharacters() {
    const characters = document.getElementById('characters');

    fetch("https://my-json-server.typicode.com/joselunafd/loteria-mexicana/characters")
        .then(response => response.json())
        .then(data => {
            data.forEach(elements => {
                const imgDelete = document.createElement('img');
                imgDelete.className = 'delete-characters';
                imgDelete.src = 'img/btn-delete.svg';

                const codeCards = `
                    <div class="cards" id="${elements.id}">
                        <img class="card_image" src="${elements.img}" alt="img-personaje">
                        <p class="card_title">${elements.name}</p>
                        <div class="force">
                            <p class="force_title" >Fuerza <span class="fuerza">${elements.force}</span></p>
                        </div>
                    </div>
                `;

                const cards = document.createElement('div');
                cards.innerHTML = codeCards;
                cards.querySelector('.force').appendChild(imgDelete);

                characters.appendChild(cards);

                imgDelete.addEventListener('click', (event) => {
                    event.preventDefault();
                    deleteCharacters(elements.id);
                });
            });
        })
        .catch(error => console.error("Error:", error));
}

printCharacters();

export { printCharacters };