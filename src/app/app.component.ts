import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[];
  title = 'Tour of heros';

  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}