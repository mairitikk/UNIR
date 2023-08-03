import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { FormComponent } from './components/form/form.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    FormComponent,
    AlumnoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
