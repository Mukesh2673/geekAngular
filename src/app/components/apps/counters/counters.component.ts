import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CdTimerComponent, TimeInterface} from 'angular-cd-timer';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {
  @ViewChild('basicTimer', { static: true }) basicTimer!: CdTimerComponent;

  timerInfo = '';

  constructor() {
    this.timerInfo = '';
  }

  onComplete(data) {
    data.elt.nativeElement.classList.add("muteCount")
  }

  onTick(data: TimeInterface) {
    this.timerInfo = '';
  }

  onStart(data) {
    // console.log('Timer started.');
  }

  doActionBasicTimer(action: String) {
    switch (action) {
      case 'start':
        this.basicTimer.start();
        break;
      case 'resume':
        this.basicTimer.resume();
        break;
      case 'reset':
        this.basicTimer.reset();
        break;
      default:
        this.basicTimer.stop();
        break;
    }
  }

  ngOnInit(){}


}
