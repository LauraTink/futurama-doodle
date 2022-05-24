import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './modules/angular-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent,
    CharacterCardComponent
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,

    CharacterCardComponent
  ],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
