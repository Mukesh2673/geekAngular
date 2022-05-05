import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  
  modalOptions!: NgbModalOptions;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  BasicOpen(basicmodal:any) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal:any) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal:any) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  SuccessOpen(successmodal:any) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal:any) {
    this.modalService.open(warningmodal, { centered: true });
  }

  effectScale(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideRight(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSlideBottom(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectNewspaper(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFall(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipHorizontal(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectFlipVertical(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSuperScaled(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectSign(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateBottom(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectRotateLeft(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }
  effectJustMe(modaleffect:any) {
    this.modalService.open(modaleffect, { centered: true });
  }

  SmallSizeOpen(smallsizemodal:any) {
    this.modalService.open(smallsizemodal, { size: 'sm' });
  }
  DefaultSizeOpen(defaultsizemodal:any) {
    this.modalService.open(defaultsizemodal);
  }
  LargeSizeOpen(largesizemodal:any) {
    this.modalService.open(largesizemodal, { size: 'lg' });
  }


}