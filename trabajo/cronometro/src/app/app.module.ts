//librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContadorComponent } from './components/contador/contador.component';
import { TwowaydataComponent } from './components/twowaydata/twowaydata.component';


@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    GaleriaComponent,
    ContadorComponent,
    TwowaydataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
