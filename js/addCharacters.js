const form = document.querySelector('form');

async function sendCharacters(name, force, img){
    try {
        const response = await fetch("https://my-json-server.typicode.com/joselunafd/loteria-mexicana/characters", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                force: force,
                img: img,
            })
        });
    
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa. Código de estado: ' + response.status);
        }

        return await response.json();
    } catch (error) {
        console.error("Ha ocurrido un error al crear el personaje:", error);        
    }
};

async function addCharacters(evento) {
    evento.preventDefault();
  
    const name = form.querySelector('#nameCharacters').value;
    const force = parseFloat(form.querySelector('#forceCharacters').value);
    const img = form.querySelector('#imgCharacters').value;


    try {
        const response = await sendCharacters(name, force, img);
        window.location.reload();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export { addCharacters };
