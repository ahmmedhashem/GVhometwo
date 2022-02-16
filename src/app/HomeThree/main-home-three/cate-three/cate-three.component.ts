import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-cate-three',
  templateUrl: './cate-three.component.html',
  styleUrls: ['./cate-three.component.scss']
})
export class CateThreeComponent implements OnInit {
  categories:any=[
    {
      img:"./assets/img/cat11.png",
      title:"Art"
    },
    {
      img:"./assets/img/cat22.png",
      title:"Art"
    },
    {
      img:"./assets/img/cat33.png",
      title:"Art"
    },
    {
      img:"./assets/img/cat4.png",
      title:"Art"
    },
    {
      img:"./assets/img/cat55.png",
      title:"Art"
    },
    {
      img:"./assets/img/cat66.png",
      title:"Art"
    },
  ]

  catOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['',''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }



  constructor() { }

  ngOnInit(): void {
  }

}
