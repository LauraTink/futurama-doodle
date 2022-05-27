import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Character } from '../../models/character.model';

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  characters: Character[] | undefined;

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.charactersService
      .get<Character[]>('characters')
      .pipe(take(1))
      .subscribe((data: Character[]) => (this.characters = data));
  }

  navigate(): void {
    this.router.navigate(['/']);
  }
}
