import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat01',
  templateUrl: './chat01.component.html',
  styleUrls: ['./chat01.component.scss']
})
export class Chat01Component implements OnInit {

  active:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const Chart:any = document.querySelectorAll('#ChatBody');
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
