import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimnailfour',
  templateUrl: './testimnailfour.component.html',
  styleUrls: ['./testimnailfour.component.scss']
})
export class TestimnailfourComponent implements OnInit {

  testimonails:any = [
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },
    {
      img : "./assets/img/Ellipse 14.png",
      name : "Ali Albloushi",
      disc : '"Overall, a great session with superb interaction from all participants. A real enjoyable and educational experience. A true delight to the training arena !"'
    },

  ]

  testimonialOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<div class="car-button-right"> <img src="./assets/img/testvl.png">  </div>', '<div class="car-button-left"> <img src="./assets/img/testvr.png">  </div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
