import { Component, Input } from '@angular/core';
import { Episodio } from 'src/app/interfaces/episodio.interface';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent {
@Input() miEpisodio: Episodio = {title:"", director:""};

@Input() miPosicion: number = 0;
}