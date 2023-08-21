import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModelComponent } from './components/form-model/form-model.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
