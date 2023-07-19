import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cronometro';
  nombre:string ="Mairi";
  apellido:string ="Tikk";
  vanus: number= 33;
  texto:string = '<h2>Ma olen progeja</h2>'
  color: string = 'verde';
  contador:number = 1;
  //contador: number = 0;
  arrayColores:string[] = ['rojo', 'verde', 'azul']
  constructor(){

  }
  contar(): void{
    this.contador++;
  }
  getVanus(): number{
    return this.vanus;
  }
  cambiarColor():void {
  /* setInterval(()=> {
    this.contador++;
    if (this.contador > 2){
      this.contador = 0;
    }
    
   },2000)
   return this.arrayColores[this.contador];
  }
  */
 let numero = Math.floor(Math.random() *3);
this.color = this.arrayColores[numero];
  }
}
