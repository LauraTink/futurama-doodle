import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';

export class BaseService {
  protected url: string;

  constructor(protected http: HttpClient) {
    this.url = `${environment.apiUrl}/`;
  }

  get<T>(feature: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${feature}`);
  }
}
