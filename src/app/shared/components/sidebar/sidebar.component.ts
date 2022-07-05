import { Component, Directive, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import { ApiService } from 'src/app/services/api.service';
import { Menu, NavService } from '../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  public menuItems: Menu[] | any;
  public url: any;

  //For Horizontal Menu
  public margin: any = 0;
  public width: any = window.innerWidth;

  constructor(
    private router: Router,
    private navServices: NavService,
    public elementRef: ElementRef,
    private apiService: ApiService
  ) {
      let UserDetails = apiService.getUserDetails();
     
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
     
      this.authUserdetails(UserDetails);      
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd){
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              
              return;
            });

            return;
          });
        }
      });
    });
  }
  //get filtered Userdetails
  authUserdetails(UserDetails){
   if(UserDetails.role === 'SuperAdmin'){
      this.menuItems = this.menuItems.filter((item)=>{
      return  item.title !== 'Drivers'
    })
      }

      if(UserDetails.role === 'Admin'){
        this.menuItems = this.menuItems.filter((item)=>{
        return  item.title !== 'Admin'
      })
    } 

      if(UserDetails.role === 'Driver'){
        this.menuItems = this.menuItems.filter((item)=>{
        return  item.title !== 'Drivers' && item.title !== 'Admin'  
      })
   }
}


  //Active NavBar State
  setNavActive(item:any) {
    this.menuItems.filter((menuItem:any) => {
      if (menuItem !== item) {
        menuItem.active = false;
        // let sidemini:any = document.querySelector('.sidebar-mini')
        // sidemini.classList.remove('sidenav-toggled')
        
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems:any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggleNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
        
        return;
      });
    }
    item.active = !item.active;
  }

  ngOnInit(): void {
    
    // ps.firstElementChild.addEventListener('scroll',()=>{},{passive:true})
  }
  ngAfterViewInit(){
    
  }
  
 

}
