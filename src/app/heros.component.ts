import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  providers: []
})
export class HerosComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
