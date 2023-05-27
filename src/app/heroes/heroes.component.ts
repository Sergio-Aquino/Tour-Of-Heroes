import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heores => this.heroes = heores);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
}
