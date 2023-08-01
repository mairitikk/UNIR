import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  numero: number = 0;
  recogerNumero($event: any){
    this.numero = $event.target.value;
  }
}
