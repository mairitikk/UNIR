import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitsch',
  templateUrl: './ngswitsch.component.html',
  styleUrls: ['./ngswitsch.component.css']
})
export class NgswitschComponent {
productos:string []= [];

constructor(){
  this.productos = ['leche', 'cacao', 'avellanas', 'azucar',
'nocilla', 'frutas'];
}
}
