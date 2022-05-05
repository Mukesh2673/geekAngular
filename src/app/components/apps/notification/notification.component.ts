import { Component, OnInit } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private ngxNotifierService: NgxNotifierService) { }

  /** crates a toast message */
  createToast(style: string): void {
    this.ngxNotifierService.createToast( style ,style, 5000);
    return;
  }

  /** clears all toast messages */
  clearToasts(): void {
    this.ngxNotifierService.clear();
  }

  /** clear last toast notification */
  clearLastToast(): void {
    this.ngxNotifierService.clearLast();
  }

  ngOnInit(){}
  
}
