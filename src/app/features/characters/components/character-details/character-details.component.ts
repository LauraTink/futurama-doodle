import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

import { Character } from '../../models/character.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.charactersService.get<Character[]>('characters').pipe(take(1)).subscribe((data: Character[]) => {
        this.character = data.find(x => x.id === id);
        this.character?.sayings.sort((a, b) => a.length - b.length);
      })
    }
  }

  navigate(): void {
    this.router.navigate(['/characters']);
  }
}
