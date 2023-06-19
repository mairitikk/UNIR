// Importar la classe carrito
import Carrito from "./carrito.js";

// Crear función para llamr API
async function consultarAPI(url) {
  try {
    // consultamos la API
    let response = await fetch(url)

    // obtenemos la respuesta como un json
    return await response.json();
  } catch (error) {
    console.error('There was a problem fetching the data:', error);
  };
}
/*
() => {
  // obtener el campo input

  // tomar su valor en entero
  const inputValueminus = parseInt(producto.cantidad.value);

  // restar la cantidad
  inputValueminus.valueOf = inputValueminus - 1;
}
*/
const cantidadClickHandler = (event) => {
  const botton = event.target;
  const sku = botton.dataset.sku;
  const signo = botton.innerHTML;
  actualizarCantidad(sku, signo)
  actualizarTotal(sku)
  insertarInfoEnCol2(carrito)
}

const actualizarTotal = (sku) => {
  let td = document.querySelector('td[data-sku="' +sku +'"]');
  td.innerHTML = carrito.obtenerInformacionProducto(sku).total +" "+ carrito.getCurrency()
}

const actualizarCantidad = (sku, signo) => {
  let input = document.querySelector('input[data-sku="' + sku + '"]');
  let value = Number(input.value)
  if (signo === "-" && value > 0) {
    input.value = value - 1
  }
  if (signo === "+") {
    input.value = value + 1
  }
  carrito.actualizarUnidades(sku, input.value)
}


function insertarInfoEnCol1(carrito) {

  let table = document.querySelector('#products')

  let info = carrito.obtenerCarrito()

  info.products.forEach((product) => {

    let row = table.insertRow();
    row.classList.add("border-line")

    // columna producto
    let cell = row.insertCell(); // creamos una columna

    let span = document.createElement("span");
    span.innerHTML = product.title
    span.classList.add("heading-2")
    cell.appendChild(span)

    let p = document.createElement("p")
    p.innerHTML = "Ref: " + product.SKU
    p.classList.add("reference")
    cell.appendChild(p)


    // columna cantidad
    let cell2 = row.insertCell();

    // boton menos
    let button = document.createElement("button");
    button.dataset.sku = product.SKU;
    button.innerHTML = "-";
    button.classList.add("button-cantidad");
    cell2.appendChild(button);

    button.addEventListener("click", cantidadClickHandler);


    // input
    const input = document.createElement("input")
    input.dataset.sku = product.SKU
    input.type = 'number';
    input.classList.add("input-number");
    input.value = "0";
    input.classList.add("input-number");
    cell2.appendChild(input);

    // boton mas
    let button2 = document.createElement("button");
    button2.dataset.sku = product.SKU;
    button2.innerHTML = "+";
    button2.classList.add("button-cantidad");
    cell2.appendChild(button2);

    button2.addEventListener("click", cantidadClickHandler);


    // columna precio
    let cell3 = row.insertCell();
    cell3.innerHTML = product.price + " " + carrito.getCurrency();

    // columna total
    let cell4 = row.insertCell();
    cell4.dataset.sku = product.SKU;
    cell4.innerHTML = product.total + " " + carrito.getCurrency();

  })
}

function insertarInfoEnCol2(carrito){

  let totalProducts = document.getElementById('total__products')
  totalProducts.innerHTML= " ";

  let info = carrito.obtenerCarrito();
  info.products.forEach((product) =>{
    if (product.total != 0 ){
      let p = document.createElement("p");
      p.innerHTML = product.title;
      totalProducts.appendChild(p);

      let p2 = document.createElement("p");
      p2.innerHTML = product.total;
      totalProducts.appendChild(p2);
    }
  });

  let totalPrice = document.getElementById('total__price')
  totalPrice.innerHTML= carrito.getTotal() + " " + carrito.getCurrency()
  console.log(info);

}


let json = await consultarAPI('https://jsonblob.com/api/1117165857469120512')

//declarar o instanciar una variable carrito
let carrito = new Carrito(json);

// carrito.actualizarUnidades('0K3QOSOV4V', 4)
// console.log(carrito.obtenerInformacionProducto('0K3QOSOV4V'))

insertarInfoEnCol1(carrito)

insertarInfoEnCol2(carrito)

