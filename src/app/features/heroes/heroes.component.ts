import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes!: Hero[];
  heroName: string = '';

  private readonly _destroy$ = new Subject<void>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  clearHeroInput(): void {
    this.heroName = '';
  }

  addHero(): void {
    this.heroName = this.heroName.trim();
    if (!this.heroName) {
      return;
    }
    this.heroService
      .addHero({ name: this.heroName })
      .pipe(takeUntil(this._destroy$))
      .subscribe((hero) => {
        this.heroes.push(hero);
        this.clearHeroInput();
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .deleteHero(hero)
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => (this.heroes = this.heroes.filter((h) => h !== hero)));
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
