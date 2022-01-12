import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosComponent } from './componentesPrecio/precios/precios.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './componentesPrecio/modal/modal.component';

@NgModule({
  declarations: [
    PreciosComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents:[ModalComponent],
  exports: [
    PreciosComponent,
    ModalComponent
  ],
  providers: []
})
export class CardModule { }
