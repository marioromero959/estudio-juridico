import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from './card.module';

const routes: Routes = [{ path: 'card', component: CardModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
