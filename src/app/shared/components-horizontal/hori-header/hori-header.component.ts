import { Component, OnInit } from '@angular/core';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {

  public isCollapsed = true;
  public isSidebar = false;
  
  Body:any = document.querySelector('body')

  constructor( ) { }

  ngOnInit(): void {
   
  }

  toggleSidebarNotification() {
  }

  toggleSidebar(){
    const sidebar:boolean = this.Body.classList.value.includes('active');
    
    if (sidebar == true) {
      this.Body.classList.remove('active');
    }
    else {
      this.Body.classList.add('active');
    }
  }
 
  searchOpen(){
    this.Body?.classList.add('search-show')
  }
  
  search(e:any){
    e.preventDefault();
    
    this.Body?.classList.remove('search-show')
  }

  ngAfterViewInit(){
  }
}
