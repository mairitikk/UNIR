import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  contador: number;
  intervalo: any;
  estado: boolean = false;
  textoBoton: string = 'start';

  constructor() {
    this.contador = 0;
    
  }
  /* start() {
    if (!this.estado) {
      this.intervalo = setInterval(() => {
        this.contador++;
      }, 1000);
      this.estado = true;
    }
  }
  stop() {
    clearInterval(this.intervalo);
    this.estado = false;
  }
  */
 startStop(){
  if (!this.estado){
    this.intervalo = setInterval(() => {
      this.contador++;
    }, 1000)
    this.estado = true;
    this.textoBoton = 'stop';
  } else {
    clearInterval(this.intervalo);
    this.estado = false;
    this.textoBoton = 'start'
  }
 }
  reset() {
    this.contador = 0;
  }
}
