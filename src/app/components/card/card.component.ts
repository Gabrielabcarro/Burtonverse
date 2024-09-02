import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
// import { forkJoin, Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';


interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string, Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {}
//  implements OnInit {
//   movies: Movie[] = [];
//   corpseBride: Movie | null = null;
//   aliceInWonderland: Movie | null = null;
//   charlieAndTheChocolateFactory: Movie | null = null;
//   beetleJuice: Movie | null = null;

//   // URLs das APIs
//   // private apiKey: string = environment.apiKey; // Us
//   private movieUrls: string[] = [
//     'http://www.omdbapi.com/?t=charlie+and+the+chocolate+factory&apikey=1e5700a2',
//     'http://www.omdbapi.com/?t=alice+in+wonderland&apikey=1e5700a2',
//     'http://www.omdbapi.com/?t=corpse+bride&apikey=1e5700a2',
//     'http://www.omdbapi.com/?t=beetlejuice'
//   ];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchMoviesData(this.movieUrls).subscribe((movies: Movie[]) => {
//       this.beetleJuice = this.movies.find(m => m.Title === 'Beetlejuice') || null;
//       this.corpseBride = this.movies.find(m => m.Title === 'corpseBride') || null;
//       this.aliceInWonderland = this.movies.find(m => m.Title === 'AliceinWonderland') || null;
//       this.charlieAndTheChocolateFactory = this.movies.find(m => m.Title === 'CharlieandTheChocolateFactory') || null;
//     });
//   }

//   fetchMoviesData(urls: string[]): Observable<Movie[]> {
//     const requests = urls.map(url => this.http.get<Movie>(url));
//     return forkJoin(requests);
//   }
// }
