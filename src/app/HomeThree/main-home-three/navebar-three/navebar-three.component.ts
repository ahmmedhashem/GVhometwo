import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navebar-three',
  templateUrl: './navebar-three.component.html',
  styleUrls: ['./navebar-three.component.scss']
})
export class NavebarThreeComponent implements OnInit {

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
