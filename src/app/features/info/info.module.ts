import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { routes } from './info.routing';
import { InfoComponent } from './components/info.component';
import { InfoService } from './services/info.service';


@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [InfoComponent],
  providers: [InfoService],
})
export class InfoModule {}
