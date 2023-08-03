import { Component } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

import { AlumnosService } from 'src/app/servises/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [];
constructor(private alumnosService: AlumnosService){}
ngOnInit(): void{
  this.alumnos = this.alumnosService.getAll()

}
}
