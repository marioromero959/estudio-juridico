import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,

  ],exports:[
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,

  ]
})
export class MaterialModule { }
