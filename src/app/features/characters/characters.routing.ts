import { Routes } from '@angular/router';

import { CharacterDetailsComponent, CharactersListComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: CharactersListComponent,
  },
  {
    path:'details/:id',
    component: CharacterDetailsComponent
  }
];
