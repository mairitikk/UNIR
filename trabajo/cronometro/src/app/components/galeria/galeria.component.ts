import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
arrayImagenes: any [] = []
imagenActual: number = 0;

constructor(){
  this.arrayImagenes = [
    {
      url: './assets/img/images (1).jpg',
      title: 'foto sunset 1'
    },
    {
      url: './assets/img/images (2).jpg',
      title: 'foto sunset 2'
    },
    {
      url: './assets/img/images (3).jpg',
      title: 'foto sunset 3'
    },
    {
      url: './assets/img/images.jpg',
      title: 'foto sunset 4'
    }
  ]
}
siguiente(): void{
  this.imagenActual++;
  if(this.imagenActual >= this.arrayImagenes.length){
    this.imagenActual = 0;
  }
}
anterior(): void{
  this.imagenActual--;
  if(this.imagenActual < 0){
    this.imagenActual = this.arrayImagenes.length -1;
  }
}
}
