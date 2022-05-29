import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Info } from '../models/info.model';
import { Character } from '@features/characters/models/character.model';

@Injectable()
export class InfoService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Info[]> {
    return this.httpClient.get<Info[]>(`${environment.apiUrl}/info`);
  }

  getCharacters(): Observable<Character[]> {
    return this.httpClient
      .get<Character[]>(`${environment.apiUrl}/characters`)
      .pipe(map((c) => c.slice(0, 10)));
  }
}
