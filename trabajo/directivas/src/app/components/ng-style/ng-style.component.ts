import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
fontSize: number = 50;
color: string = 'yellow';

cambiarFuente($event: any){
  this.fontSize = $event.target.value;
}
cambiarColor($event: any){
  this.color = $event.target.value;
}
}
