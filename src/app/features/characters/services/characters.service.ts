import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, switchMap } from 'rxjs';

import { environment } from '@env/environment';
import { Character } from '../models/character.model';

@Injectable()
export class CharactersService {
  private _characters: Character[] = [];
  set characters(data: Character[]) {
    this._characters = data;
  }
  get characters(): Character[] {
    return this._characters;
  }

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(
      `${environment.apiUrl}/characters`
    );
  }
}
