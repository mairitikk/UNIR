// Importar la classe carrito
import Carrito from "./carrito.js"; 

//Function para llamar a la API
async function consultarAPI(url) {
  try {
    // consultamos la API
    let response = await fetch(url)
    
    // obtenemos la respuesta como un json
    return await response.json();
  } catch(error) {
    console.error('There was a problem fetching the data:', error);
  };
}

let data = await consultarAPI('https://jsonblob.com/api/1117165857469120512')

//declarar una variable carrito
let carrito = new Carrito(data);

carrito.actualizarUnidades()


/*const listado = document.querySelector('#listado-alumnos');
//listado de alumnos
alumnos.forEach((alumno) => {

    const li = document.createElement('li');//<li></li>
    li.innerHTML = alumno;//<li>alumno></li>
    listado.appendChild(li); //<ul> <li>alumno</li> </ul>

});
*/



/* // create table element
var table = document.querySelector('#products')//document.createElement("table");

// create rows and cells using loops
for (var i = 0; i < 3; i++) {
  var row = table.insertRow();
  for (var j = 0; j < 4; j++) {
    var cell = row.insertCell();
    cell.innerHTML = "Row " + i + ", Cell " + j;
  }
} */

// append table to HTML document
//document.body.appendChild(table);
/*const data = [
  {name: 'John Smith', age: 35, occupation: 'Engineer'},
  {name: 'Jane Doe', age: 28, occupation: 'Designer'},
  {name: 'Bob Jones', age: 42, occupation: 'Manager'}
];

// create a new table element
const table = document.createElement('table');

// create a header row
const headers = ['Name', 'Age', 'Occupation'];
const headerRow = document.createElement('tr');
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// create a row for each data object
data.forEach(datum => {
  const row = document.createElement('tr');
  Object.values(datum).forEach(value => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  });
  table.appendChild(row);
});

// add the table to the DOM
document.body.appendChild(table); */


/**
 * 
 * function consultarAPI(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {

      // Do something with the data, like display it in a table
      carrito = new Carrito(data);

    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
}
 */