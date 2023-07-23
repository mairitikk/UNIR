import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-products',
  templateUrl: './lista-products.component.html',
  styleUrls: ['./lista-products.component.css']
})
export class ListaProductsComponent {

newProduct: Producto = {title:"", price: 0, img: ""};
@Output()productoEmitado: EventEmitter<Producto>
constructor(){
  this.productoEmitado = new EventEmitter();
}  

getDataForm(){
    this.productoEmitado.emit(this.newProduct);
    this.newProduct = {title:"", price: 0, img: ""};
}
}
