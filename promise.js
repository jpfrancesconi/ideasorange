const app = document.querySelector('#app');
const button = document.querySelector('#button');

function pageLoaded(e){
    console.log('page loaded');
}
document.addEventListener('DOMContentLoaded', pageLoaded);

//Create a promise
/*const getList = new Promise((todoBien, todoMal) => {*/
    /*todoBien("Joya, todo salio bien !");*/
    /*todoMal("Che algo fallo, pegale una mirada");*/
/*});*/

//Llamamos a la promesa
/*getList
    .then((msg) => {
        const elem = document.createElement('p');
        elem.append(`${msg}`);
        app.appendChild(elem);
    })
    .catch((msg) => {
        const elem = document.createElement('p');
        elem.append(`${msg}`);
        app.appendChild(elem);
    });
*/
app.style.display = 'flex';

const l = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();

    data.results.map((character) => {
        const elemContainer = document.createElement('div');
        const elemName = document.createElement('p');
        const elemImg = document.createElement('img');

        elemName.append(`Name: ${character.name}`);
        elemImg.src = character.image;
        elemContainer.appendChild(elemImg);
        elemContainer.appendChild(elemName);
        app.appendChild(elemContainer);
    })
}

button.addEventListener('click', l);
