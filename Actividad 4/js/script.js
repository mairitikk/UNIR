// Importar la classe carrito
import Carrito from "./carrito.js";

// Crear función para llamar API de forma Sync
async function consultarAPISync(url) {
  try {
    // consultamos la API
    let response = await fetch(url)

    // obtenemos la respuesta como un json
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  };
}

// Crear función para llamar API de forma Async
// Utilizo esta función. Pero la página también funciona con 
// consultarAPISync(). Se debe descomentar en la parte final del script
function consultarAPIAsync(url) {
  //consultar la API
  fetch(url).then(response => {
    //si respuesta 200, retornamos json
    if (response.ok){
      return response.json();
    }else {
      //en caso contrario rechazar promesa si error es 500
      if (response.status===500) {
        return Promise.reject(rejectReponse)
      }
    }
    //procesar json
  }).then(data => {
    //instanciar carrito con la informacion del json
    carrito = new Carrito(data);
    
    //pintar contenido de la tabla
    pintarInfoEnCol1(carrito)

    //si no se recibe ningun json, se imprime por consola
  }).then(undefined, data=>console.log(data))
  .catch (error => {
    console.error('There was a problem fetching the data:', error);
  });
}

//funcion para manejar el botton de cantidad
const cantidadClickHandler = (event) => {
  const botton = event.target;
  const sku = botton.dataset.sku;
  const signo = botton.innerHTML;
  actualizarCantidad(sku, signo)
  actualizarTotal(sku)
  pintarInfoEnCol2(carrito)
}

//funcion para pintar el total de un producto
const actualizarTotal = (sku) => {
  let td = document.querySelector('td[data-sku="' +sku +'"]');
  td.innerHTML = carrito.obtenerInformacionProducto(sku).total +" "+ carrito.getCurrency()
}

//funcion general para actualizar la cantidad de un producto
//controla si signo es negativo o positivo
const actualizarCantidad = (sku, signo) => {

  //se obtiene el valor de la cantidad
  let input = document.querySelector('input[data-sku="' + sku + '"]');
  let value = Number(input.value)
  
  // si el signo es negativo y el valor mayor que cero, resta
  if (signo === "-" && value > 0) {
    input.value = value - 1
  }
  
  // si el signo es positivo, suma
  if (signo === "+") {
    input.value = value + 1
  }
  carrito.actualizarCantidades(sku, input.value)
}

//function para pintar la tabla
function pintarInfoEnCol1(carrito) {

  //obtener tabla productos
  let table = document.querySelector('#products')

  //obtener carrito
  let info = carrito.obtenerCarrito()

  //para cada producto
  info.products.forEach((product) => {

    //agregar una fila en la tabla
    let row = table.insertRow();


    /* columna producto */
    let cell = row.insertCell(); 

    //crear titulo
    let span = document.createElement("span");
    span.innerHTML = product.title
    span.classList.add("heading-2")
    cell.appendChild(span)

    //crear referencia producto
    let p = document.createElement("p")
    p.innerHTML = "Ref: " + product.SKU
    p.classList.add("reference")
    cell.appendChild(p)


    /* columna cantidad*/
    let cell2 = row.insertCell();

    // crear boton menos
    let button = createButton(product.SKU, "-");
    cell2.appendChild(button);

    // crear input
    const input = document.createElement("input")
    input.dataset.sku = product.SKU
    input.type = 'number';
    input.classList.add("input-number");
    input.value = "0";
    cell2.appendChild(input);

    // crear boton mas
    let button2 = createButton(product.SKU,"+")
    cell2.appendChild(button2);


    /* columna precio */
    let cell3 = row.insertCell();

    //crear precio
    cell3.innerHTML = product.price + " " + carrito.getCurrency();


    /* columna total */
    let cell4 = row.insertCell();

    //crear total
    cell4.dataset.sku = product.SKU;
    cell4.innerHTML = product.total + " " + carrito.getCurrency();

  })
}

// function general para crear botton
function createButton(SKU,value){  
  let button = document.createElement("button");
  button.dataset.sku = SKU;
  button.innerHTML = value;
  button.classList.add("button-cantidad");

  button.addEventListener("click", cantidadClickHandler);
  return button
}

// pintar informacion del total
function pintarInfoEnCol2(carrito) {
  // obtener div total de productos
  let totalProducts = document.getElementById('total__products')

  //limpiar su contenido
  totalProducts.innerHTML= " ";

  //obtener carrito
  let info = carrito.obtenerCarrito();

  //para cada producto
  info.products.forEach((product) => {

    //si producto tiene un total diferente de cero, pintar total producto
    if (product.total != 0 ) {
      let container = document.createElement("div");
      container.classList.add("container-display");

      let div = document.createElement("div");
      div.innerHTML = product.title;
      div.classList.add("left-inner-container");

      let div2 = document.createElement("div");
      div2.innerHTML = product.total+ " " + carrito.getCurrency();
      div2.classList.add("right-inner-container");
      
      container.appendChild(div);
      container.appendChild(div2);
      totalProducts.appendChild(container);
    }
  });

  //pintar el precio total
  let totalPrice = document.getElementById('total__price')
  totalPrice.innerHTML= carrito.getTotal() + " " + carrito.getCurrency()
  
}

//declarar o instanciar una variable carrito
let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    
  /** Asynchrono */
  consultarAPIAsync('https://jsonblob.com/api/1117165857469120512')

  /*
  Synchrono
  let json = await consultarAPISync('https://jsonblob.com/api/1117165857469120512')

  //declarar o instanciar una variable carrito
  carrito = new Carrito(json);

  insertarInfoEnCol1(carrito)
  insertarInfoEnCol2(carrito)

  */
});
