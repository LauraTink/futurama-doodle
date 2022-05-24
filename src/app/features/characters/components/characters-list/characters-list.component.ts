import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { character } from '../../models/character.model';

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: character[] | undefined;

  constructor(private charactersService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.charactersService.get<character[]>('characters').pipe(take(1)).subscribe((data: character[]) => {
      this.characters = data;
      console.log(data);
    })
  }

  navigate() {
    this.router.navigate(['/']);
  }
}
