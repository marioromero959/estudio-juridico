import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss'],
  animations: [
      trigger ('openClose', [
        state('open', style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow'
        })),
        state('closed', style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue'
        })),
        transition('* => closed',[
          animate('3s')
        ]),
        transition('* => open',[
          animate('1s')
        ]),
      ]),
  ],
})

export class PreciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
