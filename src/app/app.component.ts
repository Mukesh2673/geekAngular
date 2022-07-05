import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  public isSpinner = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSpinner = false;
    },1000)
  }
}
