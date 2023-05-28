import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Black Widow' },
      { id: 13, name: 'Iron Man' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Doctor Strange' },
      { id: 17, name: 'Loki' },
      { id: 18, name: 'Captain America' },
      { id: 19, name: 'SpiderMan' },
      { id: 20, name: 'Black Panther' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

