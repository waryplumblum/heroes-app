import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { catchError, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl:string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroById( id:string ): Observable<Hero|undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( () => of(undefined) )
      )
  }

  getSuggestions( query:string ):Observable<Hero[]> {
    return this.http.get<Hero[]>(`/heroes?q=${ query }&_limit=6`);
  }

}
