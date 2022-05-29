import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@app/shared/shared.module';
import { QuestionComponent } from './question.component';
import { QuizService } from '../../services/quiz.service';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let mockService: jasmine.SpyObj<QuizService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('QuizService', ['get']);

    await TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [QuestionComponent],
      providers: [{ provide: QuizService, useValue: mockService }],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(QuestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });
});
