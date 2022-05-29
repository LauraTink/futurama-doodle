import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, finalize, of, take } from 'rxjs';

import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  loading = true;
  error = '';
  characters!: Character[];

  constructor(
    private charactersService: CharactersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.charactersService
      .get()
      .pipe(
        take(1),
        catchError((err) => {
          this.error = err?.message;
          return of([]);
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe((data: Character[]) => {
        this.characters = data;
        this.charactersService.characters = data;
      });
  }

  navigate(): void {
    this.router.navigate(['/']);
  }
}
