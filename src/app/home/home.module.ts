import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './componentes/home/home.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';



@NgModule({
  declarations: [
    HomeComponent,
    ServiciosComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
