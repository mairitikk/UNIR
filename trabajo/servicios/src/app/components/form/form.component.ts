
import { Component, inject } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/servises/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
newAlumno: Alumno ={nombre:"", edad: 0, curso:"", email:""};
alumnosSetvices = inject(AlumnosService);
getData(): void{
let response = this.alumnosSetvices.insert(this.newAlumno);
this.newAlumno ={nombre:"", edad: 0, curso:"", email:""};
if(response === 'error')
{
  alert('No se ha podido insertar el usario')
}
}
}
