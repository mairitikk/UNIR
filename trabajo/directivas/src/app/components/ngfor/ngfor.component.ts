import { Component } from '@angular/core';
import { Episodio } from 'src/app/interfaces/episodio.interface';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
todosEpisodios: Episodio[] = []
episodios: Episodio[]= [];

constructor(){
  this.todosEpisodios = new Array(

    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
{ title: 'A Golden Crown', director: 'Daniel Minahan' },
{ title: 'You Win or You Die', director: 'Daniel Minahan' },
    { title: 'The Pointy End', director: 'Daniel Minahan' },

  )
  this.episodios = this.todosEpisodios;
}
capturarDirector($event: any){
 
this.episodios = this.todosEpisodios.filter(episodio =>
  episodio.director.includes($event.target.value));

}
}
