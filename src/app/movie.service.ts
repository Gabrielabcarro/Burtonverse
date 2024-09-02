import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Movie } from './models/model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly apiKey = environment.apiKey;
  private readonly endpoints = environment.endpoints;

  constructor(private http: HttpClient) {}

  getCorpseBride(): Observable<Movie> {
    return this.http.get<Movie>(this.endpoints.corpsebride);
  }

  getBeetleJuice(): Observable<Movie> {
    return this.http.get<Movie>(this.endpoints.beetlejuice);
  }

  getAliceInWonderland(): Observable<Movie> {
    return this.http.get<Movie>(this.endpoints.aliceinwonderland);
  }

  getChocolateFactory(): Observable<Movie> {
    return this.http.get<Movie>(this.endpoints.chocolatefactory);
  }

}
