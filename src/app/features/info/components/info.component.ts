import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { character } from '@app/features/characters/models/character.model';
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

  characters: character[] | undefined;

  constructor(private infoService: InfoService, private charactersService: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.infoService
      .get<Info[]>('info')
      .pipe(take(1))
      .subscribe((data: Info[]) => (this.programInfo = data[0]));


    this.charactersService.get<character[]>('characters').pipe(take(1)).subscribe((data: character[]) => {
      this.characters = data.slice(0, 10);
    });
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
