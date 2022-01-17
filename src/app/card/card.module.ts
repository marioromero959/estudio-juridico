import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreciosComponent } from './componentesPrecio/precios/precios.component';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from './componentesPrecio/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PreciosComponent,
    ModalComponent,
<<<<<<< HEAD

=======
>>>>>>> dc8acc4a8458d066e22ba83d9e70202b87f540f5
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents:[ModalComponent],
  exports: [
    PreciosComponent,
    ModalComponent
  ],
  providers: []
})
export class CardModule { }
