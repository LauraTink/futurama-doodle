import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Question, UserScore } from '../models';

@Injectable()
export class QuizService {
  private _questions: Question[] = [];
  set questions(data: Question[]) {
    this._questions = data;
  }
  get questions(): Question[] {
    return this._questions;
  }

  private _userScore: UserScore = {
    score: 0,
    questionsAnswered: 0,
    totalQuestions: 0
  } as UserScore;
  set userScore(data: UserScore) {
    this._userScore = data;
  }
  get userScore(): UserScore {
    return this._userScore;
  }

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${environment.apiUrl}/questions`);
  }
}
