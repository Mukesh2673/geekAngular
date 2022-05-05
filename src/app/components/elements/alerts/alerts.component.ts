import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public isInfo = false;
  public isSuccess = false;
  public isWarning = false;
  public isError = false;
  public closed = false;
  alertSuccess = true;
  alertInfo = true;
  alertWarning = true;
  alertDanger = true;

  alertLinkSuccess = true;
  alertLinkInfo = true;
  alertLinkWarning = true;
  alertLinkDanger = true;

  alertStyleSuccess = true;
  alertStyleInfo = true;
  alertStyleWarning = true;
  alertStyleDanger = true;

  alertIconSuccess = true;
  alertIconInfo = true;
  alertIconWarning = true;
  alertIconDanger = true;

  constructor() { }

  ngOnInit(): void {
  }

  info() {
    this.isInfo = !this.isInfo;
    this.isSuccess = false;
    this.isWarning = false;
    this.isError = false;
    if (this.isInfo == true) {
      let tabPan:any = document.querySelector('.tab-pane')
      tabPan.classList.add('active');
    }
    else {
      let tabPanRemove:any = document.querySelector('.tab-pane')
      tabPanRemove.classList.remove('active');
    }

  }
  success() {
    this.isSuccess = !this.isSuccess;
    this.isInfo = false;
    this.isWarning = false;
    this.isError = false;
    if (this.isSuccess == true){
      let tabPane:any = document.querySelector('.tab-pane')
      tabPane.classList.add('active');
    }
    else{
      let tabPanRemove1:any =document.querySelector('.tab-pane')
      tabPanRemove1.classList.remove('active');
    }
  }
  warning() {
    this.isWarning = !this.isWarning;
    this.isInfo = false;
    this.isSuccess = false;
    this.isError = false;
    if (this.isWarning == true)
     {
      let tabPane2:any = document.querySelector('.tab-pane')
      tabPane2.classList.add('active');
     }
    else{
      let tabPanRemove2:any = document.querySelector('.tab-pane')
      tabPanRemove2.classList.remove('active');
    }
  }
  error() {
    this.isError = !this.isError;
    this.isInfo = false;
    this.isSuccess = false;
    this.isWarning = false;
    if (this.isError == true)
      {
        let tabPane3:any = document.querySelector('.tab-pane')
      tabPane3.classList.add('active');
      }
    else{
        let tabePanRemove3:any = document.querySelector('.tab-pane')
        tabePanRemove3.classList.remove('active');
      }
  }
}
