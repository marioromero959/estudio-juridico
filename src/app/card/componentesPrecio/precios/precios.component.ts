import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss'],
})

export class PreciosComponent implements OnInit {
  
cards = [
  {
    name:'Basico',
    precio:1000,
    description:'Plan Basico'
  },
  {
    name:'Profesional',
    precio:2000,
    description:'Plan Profesional'
  },
  {
    name:'Master',
    precio:3000,
    description:'Plan Master'
  }
]

  constructor(public dialog: MatDialog) { }

  ngOnInit(){}
  
  abrirModal() {
    const dialogRef = this.dialog.open(ModalComponent,{
      disableClose:false,
      data:this.cards
    });
  }

}