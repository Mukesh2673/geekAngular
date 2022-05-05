import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  TabStyle1;
  TabStyle2;
  TabStyle3;
  TabStyle4;
  TabStyle5;
  constructor() { }

  ngOnInit(): void {
  }

}
