//Llamando boton desde html
const btnGenerateCat = document.getElementById('btn-generate-cat')

//Aplicando evento al boton (evento click)
btnGenerateCharacter.addEventListener('click', getCharacter)

//Creando funcion para creacion de card
function createCard(cat) {
  //Traer por medio de su id el elemento div
  const containerCard = document.getElementById('container-card');
  containerCard.innerHTML= "";

  //Creando elementos
  const imgCat = document.createElement('img');

  //Añadiendo clases para aplicar estilos
  containerCard.classList.add('container-card');

  //Añadiendo elementos sengun la necesidad
  imgCat.src = cat.image;
  imgCat.alt = cat.id;

  //Estructurando arbol de elementos
  containerCard.appendChild(imgCat);

}

//Realizando el consumo de la API
function getCharacter() {
  const requestMethod = {method: 'GET'};
  const URL = 'https://api.thecatapi.com/v1/images/search';

  fetch(URL, requestMethod)
    .then(response => response.json())
    .then(data => createCard(data[0]))
    .chach(err => console.error(err));

}