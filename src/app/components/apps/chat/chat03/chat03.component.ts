import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chat03',
  templateUrl: './chat03.component.html',
  styleUrls: ['./chat03.component.scss']
})
export class Chat03Component implements OnInit {

  constructor(
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  ChatModal(chatmodel:any){
    this.modalService.open(chatmodel,{ scrollable: true});
  }
}
