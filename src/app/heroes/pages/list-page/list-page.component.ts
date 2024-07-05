import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public heroes:Hero[] = []

  constructor( private heroesService:HeroesService ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(
        heroes => {
          console.log('Heroes received:', heroes);
          this.heroes = Array.isArray(heroes) ? heroes : [];
        },
        error => {
          console.error('Error fetching heroes:', error);
          this.heroes = []; // Manejo de errores, asigna un array vacío u otro valor adecuado
        }
      );
  }


}
