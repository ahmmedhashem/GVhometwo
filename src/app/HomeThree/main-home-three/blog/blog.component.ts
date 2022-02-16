import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs:any = [
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
    {
      new : "NEW",
      title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      disc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .."
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<div class="car-button-right"> <img src="./assets/img/Vector-2.png">  </div>', '<div class="car-button-left"> <img src="./assets/img/Vector.png">  </div>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
