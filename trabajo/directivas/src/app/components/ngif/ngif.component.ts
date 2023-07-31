import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
sectionActual: string = 'sobremi';

cargarSeccion(seccion: string) :void{
  this.sectionActual =seccion;
}
}
