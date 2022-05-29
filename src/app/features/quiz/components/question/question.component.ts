import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, finalize, of, take } from 'rxjs';

import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  loading = true;
  error = '';
  userScore = this.quizService.userScore;

  question!: Question;
  index: number = 0;
  finished = false;

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizService.get()
      .pipe(
        take(1),
        catchError((err) => {
          this.error = err?.message;
          return of([]);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe((data: Question[]) => {
        if (data) {
          this.quizService.questions = data;
          this.userScore.totalQuestions = data.length;
          this.question = data[this.index];
        }
      });
  }

  checkAnswer(answer: string): void {
    this.loading = true;
    this.userScore.questionsAnswered = this.userScore.questionsAnswered + 1;
    this.index = this.index + 1;

    if (answer === this.question.correctAnswer) {
      this.userScore.score = this.userScore.score + 1;
    }

    if (this.index !== this.userScore.totalQuestions) {
      this.loadQuestion();
    } else {
      this.loading = false;
      this.finished = true;
    }
  }

  reset(): void {
    this.finished = false;
    this.index = 0;
    this.userScore.score = 0;
    this.userScore.questionsAnswered = 0;
    this.loadQuestion();
  }

  navigate(): void {
    this.router.navigate(['/']);
  }

  private loadQuestion(): void {
    this.question = this.quizService.questions[this.index];
    this.loading = false;
  }
}
