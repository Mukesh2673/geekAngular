import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  basicPage = 1;
  advPage= 4;
  currentPage=3;
  currentPageSm=1;
  currentPageS=1;
  currentPageC=2;
  currentPageE=3;
  alphabetpage=1;
  constructor() { }

  ngOnInit(): void {
  }

  getPageSymbol(current: number) {
    // return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
