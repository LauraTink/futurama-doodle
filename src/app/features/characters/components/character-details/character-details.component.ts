import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, finalize, of, take } from 'rxjs';

import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  loading = true;
  error = '';
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id && this.charactersService.characters.length > 0) {
      this.getCharacter(id);
    } else if (id) {
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
          this.charactersService.characters = data;
          this.getCharacter(id);
        });
    }
  }

  navigate(): void {
    this.router.navigate(['/characters']);
  }

  private getCharacter(id: number) {
    this.charactersService.characters.filter((c) => {
      if (c.id === id) {
        this.character = c;
        this.character?.sayings.sort((a, b) => a.length - b.length);
        this.loading = false;
      }
    });
  }
}
