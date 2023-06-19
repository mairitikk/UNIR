class Carrito {
    #productos
    #currency
    #total

    constructor(json) {
        this.#currency = json.currency;
        this.#productos = json.products;

        //para cada productos agregamos cantidad = 0
        this.#productos.forEach((producto) => {
            producto.cantidad = 0
            producto.total = 0
        })

        // calculamos el total
        this.calcularTotal()
        
    }

    calcularTotal(){
        const total = this.#productos.reduce((acc, producto) =>{
            return acc + producto.total
            
        }, 0)
        this.#total = total
    }

    // Actualiza el número de unidades que se 
    // quieren comprar de un producto (sku)
    actualizarUnidades(sku, unidades) {
        //let producto = this.productos.filter(function (item){ return item.SKU===sku; });
        let producto = this.#productos.find(item=>item.SKU===sku);       
        producto.cantidad = unidades
        producto.total = Number(producto.price) * producto.cantidad
        this.calcularTotal()
    }

    // Devuelve los datos de un producto 
    // además de las unidades seleccionadas
    obtenerInformacionProducto(sku) {
        return this.#productos.find(item=>item.SKU===sku);
    }
    
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
    obtenerCarrito() {
        let json = {
            total: this.#total,
            currency: this.#currency,
            // 1) products: this.productos,
            products: [] 
        };
        // lo implemento con la función map porque es la mejor solución.
        // con la solución 1) (ver arriba) cualquier modificación de "products"
        // me cambia el valor original de "this.productos"
        this.#productos.map(function(producto){
            json.products.push({
                "SKU": producto.SKU,
                "title": producto.title,
                "price": producto.price,
                "cantidad": producto.cantidad,
                "total": producto.total
            })
        })
        return json
    }

    getCurrency(){
        return this.#currency
    }

    getTotal(){
        return this.#total
    }
}

export default Carrito;