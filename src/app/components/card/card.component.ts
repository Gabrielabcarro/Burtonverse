import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent  implements OnInit {

corpsebride!: Observable<any>;
beetlejuice!: Observable<any>;
alice!: Observable<any>;
charlie!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const {corpsebride, beetlejuice,aliceinwonderland,chocolatefactory} = environment.endpoints;

    this.corpsebride = this.http.get(corpsebride);
    this.beetlejuice = this.http.get(beetlejuice);
    this.alice = this.http.get(aliceinwonderland);
    this.charlie = this.http.get(chocolatefactory);
  }
}


