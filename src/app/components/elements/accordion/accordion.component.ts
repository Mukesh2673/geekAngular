import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isCollapsed = false;
  public isFirstCollapsed = false;
  public isSecondCollapsed = false;
  public isFirstGradient = false;
  public isSecondGradient = false;
  public isFirst = false;
  public isSecond = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      let firstgradient:any = document.querySelector('.firstgradient')
      firstgradient.classList.remove('collapsed');
    } else {
      let firstgradientAdd:any = document.querySelector('.firstgradient')

      firstgradientAdd.classList.add('collapsed');
    }
  }
  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      let secondgradient:any = document.querySelector('.secondgradient')
      secondgradient.classList.remove('collapsed');
    } else {
      let secondgradientAdd:any =document.querySelector('.secondgradient')
      secondgradientAdd.classList.add('collapsed');
    }
  }
}
