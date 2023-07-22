import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent {
@Input() miArrayNumeros: number[] = [];
constructor(){
  console.log(this.miArrayNumeros);
}
//functiones de ciclo de vida dell componente
//ngOnInit es un function que solo se produce una vez cuando el
//ts u el html y la etiqueta persolisada estan completamente cargados 
ngOnInit(): void {
  this.cargarDatos();

  }// los inputs estaran disponibles cuando este totalmente cargado el coponente
cargarDatos(): string{
  //recoer el arry de numeros
  let lis="";
  this.miArrayNumeros.forEach(numero => {
    lis += `<li> ${numero}<li>`
  });
  return lis;
}

}
