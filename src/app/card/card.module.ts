import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosComponent } from './componentesPrecio/precios/precios.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './componentesPrecio/modal/modal.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PreciosComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDialogModule,


  ],
  exports: [
    PreciosComponent,
    ModalComponent

  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue:
    { hasBackdrop: false}}
  ]
})
export class CardModule { }
