import { Injectable } from '@angular/core';
import { ALUMNOS } from '../db/alumnos.db';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos: Alumno[] = ALUMNOS;
  private id: number = 4;
  
  getAll() : Alumno []{
    return this.arrAlumnos;
  }
  getByCourse(course: string) : Alumno[]{
    return this.arrAlumnos.filter(alumno => alumno.curso.includes(course));
  }
  insert(alumno:Alumno) : string{
    alumno.id = this.id;
    this.arrAlumnos.push(alumno)
    this.id++;
    return 'ok';
  }
}
