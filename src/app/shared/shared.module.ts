import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';

import { ContentStyleComponent } from './components/layouts/content-style/content-style.component';
import { FullContentComponent } from './components/layouts/full-content/full-content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';

import { FeatherModule } from 'angular-feather';
import { Home, Layers, Box, 	Edit, PieChart, Zap, Map, Grid, Droplet, ShoppingCart, Layout, Users, HelpCircle, File, Cpu, Sliders } from 'angular-feather/icons';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ErrorStyleComponent } from './components/layouts/error-style/error-style.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { HoriFullLayoutComponent } from './components/hori-full-layout/hori-full-layout.component';
import { HoriHeaderComponent } from './components-horizontal/hori-header/hori-header.component';
import { HoriMenuComponent } from './components-horizontal/hori-menu/hori-menu.component';
import { HoriSwitcherComponent } from './components-horizontal/hori-switcher/hori-switcher.component';

// Select some icons (use an object, not an array)
const icons = {
  Home, Layers, Box, 	Edit, PieChart, Map, Grid, Zap, Droplet, ShoppingCart, Layout, Users, HelpCircle, File, Cpu, Sliders
};
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation:false
};

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TabToTopComponent,
    LoaderComponent,
    FullContentComponent,
    ContentStyleComponent,
    FooterComponent,
    ErrorStyleComponent,
    FullscreenDirective,
    SwitcherComponent,
    HoriFullLayoutComponent,
    HoriHeaderComponent,
    HoriMenuComponent,
    HoriSwitcherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FeatherModule.pick(icons),
    PerfectScrollbarModule,
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [
    FullContentComponent,
    FeatherModule,
    FullscreenDirective,
    TabToTopComponent,
    LoaderComponent,
    HoriFullLayoutComponent
  ],
})
export class SharedModule { }
