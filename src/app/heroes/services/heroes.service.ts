import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    if (environments.useStaticData) {
      console.log('Fetching heroes from static data');
      return this.http.get<{ heroes: Hero[] }>('assets/data/db.json')
        .pipe(
          map(response => response.heroes || []),
          catchError((error) => {
            console.error('Error fetching static data:', error);
            return of([]);
          })
        );
    } else {
      console.log('Fetching heroes from API');
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
        .pipe(
          catchError((error) => {
            console.error('Error fetching dynamic data:', error);
            return of([]);
          })
        );
    }
  }

  getHeroById( id:string ): Observable<Hero|undefined> {
    if ( environments.useStaticData ) {
      return this.getHeroes()
        .pipe(
          map( heroes => heroes.find( hero => hero.id === id)),
          catchError( () => of( undefined ))
        );
    } else {
      return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( () => of(undefined) )
      )
    }
  }

  getSuggestions( query:string ):Observable<Hero[]> {
    if ( environments.useStaticData ) {
      return this.getHeroes()
        .pipe(
          map(heroes => heroes
            .filter(hero => hero.superhero.toLowerCase().includes(query.toLowerCase())).slice(0, 6)),
          catchError(() => of([]))
      );
    } else {
      return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${ query }&_limit=6`);
    }
  }

}
