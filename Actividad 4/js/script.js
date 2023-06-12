
const listado = document.querySelector('#listado-alumnos');
//listado de alumnos
alumnos.forEach((alumno) => {
    
    const li = document.createElement('li');//<li></li>
    li.innerHTML = alumno;//<li>alumno></li>
    listado.appendChild(li); //<ul> <li>alumno</li> </ul>

});


/* 
Codigo para llamar a la API

fetch('https://jsonblob.com/api/1117165857469120512')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .then(data => {
    console.log(data.products);
    data.products.forEach((alumno) => {
    
        
    
    });
    // Do something with the data, like display it in a table
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  }); */

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
document.body.appendChild(table);
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