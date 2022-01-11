import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule

  ],exports:[
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule

  ]
})
export class MaterialModule { }
