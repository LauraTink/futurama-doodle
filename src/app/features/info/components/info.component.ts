import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '@app/features/characters/models/character.model';
import { CharactersService } from '@app/features/characters/services/characters.service';
import { take } from 'rxjs';
import { Info } from '../models/info.model';

import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  programInfo: Info | undefined;

  characters: Character[] | undefined;

  constructor(
    private infoService: InfoService,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.infoService
      .get<Info[]>('info')
      .pipe(take(1))
      .subscribe((data: Info[]) => (this.programInfo = data[0]));

    this.charactersService
      .get<Character[]>('characters')
      .pipe(take(1))
      .subscribe((data: Character[]) => (this.characters = data.slice(0, 10)));
  }

  navigate(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
