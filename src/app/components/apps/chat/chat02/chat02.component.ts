import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat02',
  templateUrl: './chat02.component.html',
  styleUrls: ['./chat02.component.scss']
})
export class Chat02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const Chart:any = document.querySelectorAll('#ChatList, #ChatBody');
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
