import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreciosComponent } from './componentesPrecio/precios/precios.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PreciosComponent,

    
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    PreciosComponent
    
  ]
})
export class CardModule { }
