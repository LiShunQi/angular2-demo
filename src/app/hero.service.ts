/**
 * Created by lsq on 2017/12/19.
 */
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock.heros';
@Injectable()

export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
