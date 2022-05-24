import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { routes } from './characters.routing';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersService } from './services/characters.service';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [CharactersListComponent, CharacterDetailsComponent],
  providers: [CharactersService],
})
export class CharactersModule {}
