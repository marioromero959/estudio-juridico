import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [AppComponent],
  imports:
  [BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  CardModule
],
exports: [
  BrowserAnimationsModule,

],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
