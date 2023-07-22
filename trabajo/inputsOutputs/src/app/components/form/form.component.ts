import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
miNumero: number = 0;
//paso 1
@Output() numeroEmitido: EventEmitter<number>

constructor(){
  //paso 2
  this.numeroEmitido = new EventEmitter();
}
capturarNumero(){
  //paso 3
  this.numeroEmitido.emit(this.miNumero);
  //este numero se lo tenemos que pasar el padre con un output
}
}
