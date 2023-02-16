//Llamando boton desde html
const btnGenerateCat = document.getElementById('btn-generate-cat')

//Aplicando evento al boton (evento click)
btnGenerateCat.addEventListener('click', getCat)

//Creando funcion para creacion de card
function createCard(cat) {
//Traer por medio de su id el elemento div
  const container = document.querySelector('.container-card');
  const containerCard = document.createElement('div');
  containerCard.classList.add("card")

  //Creando elemento
  const imgCat = document.createElement('img');

  //Añadiendo clases para aplicar estilos
  imgCat.classList.add('img-cat');

  //Añadiendo elementos sengun la necesidad
  imgCat.src = cat.image;
  imgCat.alt = cat.id;

  //Estructurando arbol de elementos
  containerCard.appendChild(imgCat);
  container.appendChild(containerCard);
}

//Realizando el consumo de la API
function getCat() {
  const requestMethod = {
    method: 'GET'
  };
  const URL = 'https://api.thecatapi.com/v1/images/search';

  
  fetch(URL, requestMethod)
    .then(response => response.json())
    .then(data => createCard(data[0]))
    .catch(err => console.error(err));
}