import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Character } from '@features/characters/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  @Input() thumbnails: boolean = false;

  private _character = {} as Character;

  @Input() set character(value: Character) {
    this._character = value;
  }

  get character(): Character {
    return this._character;
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  loadCharacter(id: number):void {
    const url = this.thumbnails ? `characters/details/${id}` : `details/${id}`;
    this.router.navigate([url], { relativeTo: this.route });
  }
}
