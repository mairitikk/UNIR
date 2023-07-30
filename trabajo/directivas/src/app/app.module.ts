import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { EpisodioComponent } from './components/ngfor/episodio/episodio.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgifComponent } from './components/ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    EpisodioComponent,
    NgStyleComponent,
    NgClassComponent,
    NgifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
