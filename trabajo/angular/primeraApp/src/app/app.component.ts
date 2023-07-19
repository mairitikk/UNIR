import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "mi primer title";
  nombre: string = "Mairi Tikk";
  appellido: string = "Tikk";
  constructor(){

  }
  getApellido() :string {
    return this.appellido;
  }
}
