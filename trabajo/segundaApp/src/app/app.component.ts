import { Component } from '@angular/core';
import { Contacto } from './interfaces/contacto.interface';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrContactos: Contacto[] = [];
  newContacto: Contacto = {name: "", phone: 0};

  constructor(){
    this.arrContactos = [
      {name: 'mairi', phone: 3643290},
        {name: 'maii', phone: 7653643290},
        {name: 'mairi', phone: 3643290},
      
    ]
  }
  cargarDatos(): string {
    let lis = "";
    this.arrContactos.forEach(contacto => {
      lis += `<li> ${contacto.name} - ${contacto.phone}<li>`
    })
    return lis;
  }
  guardar(): void{

    // et ei saaks nulliga registeerida
    if(this.newContacto.name !== "" && (this.newContacto.phone !== 0 || this.newContacto.phone !== null))
    //antes intsentar tienemos que comprobar si esta en array o no
    {
      let busqueda = this.arrContactos.findIndex(contacto =>
      contacto.name === this.newContacto.name || contacto.phone ===
      this.newContacto.phone)
      if(busqueda === -1){
        //no existe inseto el elemento en el array
    this.arrContactos.push(this.newContacto);
    this.newContacto = {name:"", phone: 0} }
    else {
      //existe lanzo el masaje duuplicado
      alert('this contact is dublicate')
    }
  }
    else{alert('los campos no pueden ser vacios')
  }
  }
}

