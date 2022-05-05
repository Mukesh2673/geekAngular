import { Component, OnInit } from '@angular/core';
import * as dragula from 'dragula';

@Component({
  selector: 'app-dragula-card',
  templateUrl: './dragula-card.component.html',
  styleUrls: ['./dragula-card.component.scss']
})
export class DragulaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let left:any = document.querySelector('#left-defaults');
    let right:any = document.querySelector('#right-defaults');
    let event:any = document.querySelector('#left-events');
    dragula(
      [
        left, right, event
      ]
    )
  }

}
