import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
// import { Banana } from '../banana';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  constructor() { }

  ngOnInit(): void {
    // console.log('Heroooooo init', this.selectedHero?.name || 'Helloooo'); // optional syntax-> optionalValue?.prop || alternative
  }
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
