import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-home-three',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './main-home-three.component.html',
  styleUrls: ['./main-home-three.component.scss']
})
export class MainHomeThreeComponent implements OnInit {
  location: Location;
  
  constructor(location: Location) { 
    this.location = location;
  }

  ngOnInit(): void {
  }

}
