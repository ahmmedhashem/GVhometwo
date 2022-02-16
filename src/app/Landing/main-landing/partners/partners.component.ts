import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  parteners:any = [
    {
      img : "./assets/img/01-moe 1.png"
    },
    {
      img : "./assets/img/2020.png"
    },
    {
      img : "./assets/img/03-mathnasium 1.png"
    },
    {
      img : "./assets/img/04-Cambridge 1.jpg"
    },
    {
      img : "./assets/img/05-Microsoft 1.png"
    },
    {
      img : "./assets/img/06-uae2pm 1.png"
    },
    {
      img : "./assets/img/logo 2.png"
    },
    {
      img : "./assets/img/Logo-B 1.png"
    },
    {
      img : "./assets/img/Group-2.png"
    },
    {
      img : "./assets/img/surface1.png"
    }
  ]

  partenerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }







  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
  }

}
