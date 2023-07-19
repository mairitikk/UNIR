import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaydata',
  templateUrl: './twowaydata.component.html',
  styleUrls: ['./twowaydata.component.css']
})
export class TwowaydataComponent {
numero1: number = 0;
numero2: number =0;
resultado: number=0;
operacion: string= "";
/*sumar(){
this.resultado = this.numero1 + this.numero2
}*/
calcular($event: any): void{
  this.operacion = $event.target.innerText;
  switch ($event.target.innerText){
    case 'Sumar':
      this.resultado = this.numero1 + this.numero2;
      break;
    
      case 'Restar':
        this.resultado = this.numero1 - this.numero2;
        break;
      
      case 'Multiplicar':
        this.resultado = this.numero1 * this.numero2;
        break;
  }
  
}
}
