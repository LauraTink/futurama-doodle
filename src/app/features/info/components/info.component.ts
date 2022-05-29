import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, combineLatest, finalize, of, take } from 'rxjs';

import { Character } from '@app/features/characters/models/character.model';
import { Info } from '../models/info.model';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  loading = true;
  error = '';
  programInfo: Info | undefined = {} as Info;

  characters: Character[] | undefined;

  constructor(
    private infoService: InfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.infoService.get(),
      this.infoService.getCharacters(),
    ])
      .pipe(
        take(1),
        catchError((err) => {
          this.error = err?.message;
          return of([]);
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe(([info, characters]) => {
        this.programInfo = info[0];
        this.characters = characters;
      });
  }

  navigate(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
