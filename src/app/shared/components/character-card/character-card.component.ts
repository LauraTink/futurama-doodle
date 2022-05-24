import { Component, Input, OnInit } from '@angular/core';

import { character } from '../../../features/characters/models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {
  @Input() thumbnails: boolean = false;

  private _character = {} as character;

  @Input() set character(value: character) {
    this._character = value;
  }

  get character(): character {
    return this._character;
  }

  constructor() {}

  ngOnInit(): void {}
}
