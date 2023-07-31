import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent {
estado: boolean = false;

cambiarEstado(){
  this.estado = !this.estado;
}
}
