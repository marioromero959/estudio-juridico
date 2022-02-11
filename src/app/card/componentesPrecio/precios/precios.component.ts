import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss'],
})
export class PreciosComponent  {

awitas =[1,2,3]

  cards = [
    {
      titulo: 'Basico',
      precio: 9.99,
      plan: 'Plan Basico',
      paquete: '50GB',
      usuarios: '5 Usuarios',
      velocidad: '40mb/s',
    },
    {
      titulo: 'Profesional',
      precio: 19.99,
      plan: 'Plan Profesional',
      paquete: '100GB',
      usuarios: '10 Usuarios',
      velocidad: '200mb/s',
    },
    {
      titulo: 'Master',
      precio: 29.99,
      plan: 'Plan Master',
      paquete: 'Ilimitado',
      usuarios: 'Ilimitado',
      velocidad: '500mb/s',
    },
  ];

  constructor(public dialog: MatDialog) {}

  

  abrirModal ( card:any) {
    const dialogRef= this.dialog.open(ModalComponent, {
      width: '410px',


      disableClose: false,
      data: card,
    });
  }



}

