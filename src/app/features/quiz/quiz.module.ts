import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { routes } from './quiz.routing';
import { QuestionComponent } from './components/question/question.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [QuestionComponent],
  providers: [QuizService],
})
export class QuizModule {}
