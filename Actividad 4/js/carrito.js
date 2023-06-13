class Carrito {
    constructor(json) {
        this.currency = json.currency;
        this.productos = json.products;

        //para cada productos agregamos cantidad = 0
        this.productos.forEach((producto) => {
            producto.cantidad = 0
            producto.total = 0
        })

        // calculamos el total
        const total = this.productos.reduce((acc, producto) =>{
            return acc + producto.total
            
        }, 0)
        this.total = total

    }

    actualizarUnidades(sku, unidades) {
        console.log(this.productos);
        console.log(this.total)
        // Actualiza el número de unidades que se quieren comprar de un producto
    }

    obtenerInformacionProducto(sku) {
        // Devuelve los datos de un producto además de las unidades seleccionadas
        // Por ejemplo
        // {
        //   "sku": "0K3QOSOV4V",
        //   "quantity": 3
        // } 
    }

    obtenerCarrito() {
        // Devuelve información de los productos añadidos al carrito
        // Además del total calculado de todos los productos
        // Por ejemplo:
        // {
        //   "total": "5820",
        //   "currency: "€",
        //   "products" : [
        //     {
        //       "sku": "0K3QOSOV4V"
        //       ..
        //     }
        //    ]}
        // }
    }
}

export default Carrito;