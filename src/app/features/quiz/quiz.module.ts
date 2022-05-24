import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { routes } from './quiz.routing';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [QuestionComponent, ResultComponent],
  providers: [],
})
export class QuizModule {}
