import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.0,
        backgroundColor: 'unset'
      })),
      transition('open => closed', [
        animate('5s')
      ]),
      transition('closed => open', [
        animate('5s')
      ]),
    ]),
  ]
})
export class CategoriesComponent implements OnInit {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }


  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {

  }

}
