import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrNumbers: number[] = [];

  constructor() {
    this.arrNumbers = [2, 4, 6, 74]
  }
  getNumber($event: number) {
    this.arrNumbers.push($event);
  }
}
