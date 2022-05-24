import { Routes } from '@angular/router';

import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('@features/info/info.module').then(m => m.InfoModule),
      },
      {
        path: 'characters',
        loadChildren: () => import('@features/characters/characters.module').then(m => m.CharactersModule),
      },
      {
        path: 'quiz',
        loadChildren: () => import('@features/quiz/quiz.module').then(m => m.QuizModule),
      },
    ],
  },
];
