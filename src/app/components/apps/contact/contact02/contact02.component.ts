import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-contact02',
  templateUrl: './contact02.component.html',
  styleUrls: ['./contact02.component.scss']
})
export class Contact02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const Chart:any = document.querySelectorAll('#mainContactList');
    function perfectChart(){
      Chart.forEach( (element:any)=>{
        const ps = new PerfectScrollbar(element,{
          wheelPropagation:true,
          suppressScrollX:true
        });
      } )
    }
    perfectChart()
  }
}
