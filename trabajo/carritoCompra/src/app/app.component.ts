import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  producto: Producto[] = [];

  constructor(){
    this.producto = [
      {
        img: 'https://img.freepik.com/free-vector/isolated-milk-box-cartoon-style_1308-117384.jpg',
        price: 12,
        title:'Leche'
      },
      {
        img: 'https://c8.alamy.com/compde/hyc5gb/milch-karton-vector-illustration-hyc5gb.jpg',
        price: 3,
        title: 'leche'
      }
    ]
  }
  getProduct($event: Producto){
    this.producto.push($event)

  }
}
