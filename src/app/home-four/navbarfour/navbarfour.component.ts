import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbarfour',
  templateUrl: './navbarfour.component.html',
  styleUrls: ['./navbarfour.component.scss']
})
export class NavbarfourComponent implements OnInit {

  constructor() { }

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
