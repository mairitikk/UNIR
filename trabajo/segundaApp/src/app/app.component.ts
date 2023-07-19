import { Component } from '@angular/core';
import { Contacto } from './interfaces/contacto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrContactos: Contacto[] = [];

  constructor(){
    this.arrContactos = [
      {
        name: 'mairi', phone: 3643290
      }
    ]
  }
  cargarDatos(): string {
    return `<li>${this.arrContactos[0].name} - ${this.arrContactos[0].phone} </li>`
  }
}
