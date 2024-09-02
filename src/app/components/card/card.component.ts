import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/model';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent  implements OnInit {


Moviecorpsebride: Observable<Movie>;
Moviebeetlejuice: Observable<Movie>;
Moviealice: Observable<Movie>;
Moviecharlie: Observable<Movie>;

constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    // Obtém os dados do endpoint 'corpsebride'
    this.Moviecorpsebride = this.MovieService.getCorpseBride();

    // Obtém os dados de outro endpoint
    this.Moviebeetlejuice = this.MovieService.getBeetleJuice();


    // Obtém os dados de outro endpoint
    this.Moviealice = this.MovieService.getAliceInWonderland();

    this.Moviecharlie = this.MovieService.getChocolateFactory();
  }
}





