import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.css']
})
export class AlumnoCardComponent {
@Input() miAlumno: Alumno | any;
}
