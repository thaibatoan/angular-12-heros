import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
})
export class HeroItemComponent {
  @Input() hero!: Hero;
  @Output() deleteHero = new EventEmitter<Hero>();

  delete(hero: Hero): void {
    this.deleteHero.emit(hero);
  }
}
