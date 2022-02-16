import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

declare var $:any;





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit(): void {
    $("nav .navbar-toggler").click(function(){

     if($("nav .collapse").hasClass("show")){
      $("nav .collapse").slideUp(500);
      $("nav .collapse").removeClass("show");

     }else{
      $("nav .collapse").slideDown(500);
      $("nav .collapse").addClass("show");
     }

    })


  }

}
