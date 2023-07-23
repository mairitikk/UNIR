import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
 @Input() misProductos: Producto [] = []
 cargarProductos(): string{
  let html = "";
  this.misProductos.forEach(producto => {
    html +=` <article class="producto">
    <img src="${producto.img}" alt="${producto.title}">
    <h3>${producto.title}</h3>
    <p>${producto.price} $</p>
    </article>`
  })
  return html;
 }
}
