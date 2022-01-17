import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from './card.module';
import { PreciosComponent } from './componentesPrecio/precios/precios.component';

const routes: Routes = [
  { path: '', component: PreciosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
