import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent {
  @Input() valor: number = 0;
constructor(){
  console.log('constructor del componente uno ' + this.valor)
}
ngOnChanges(): void {
  console.log('onchange component uni '+ this.valor );
}
ngOnInit(): void {
  console.log('Oninit componente uno ' + this.valor)
}
ngDoCheck(): void {
  console.log('Dochek ' + this.valor)
}
}
