import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
estado: boolean = false;
textoBtn: string = 'abrir';
textoNotificacion: string = 'El menu esta cerrado'

cambiarEstado(){
  this.estado = !this.estado;
  this.textoBtn = (this.estado) ? 'cerrar': 'abrir';
  this.textoNotificacion = (this.estado) ? 'El menu esta abierto': 'El menu esta cerrado';
}
}
