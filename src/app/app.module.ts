import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './Home/main/navbarHome/navbarHome.component';
import { ActivityComponent } from './Home/main/activity/activity.component';
import { ContactComponent } from './Home/main/contact/contact.component';
import { FooterHomeComponent } from './Home/main/footerHome/footerHome.component';
import { MainComponent } from './Home/main/main.component';
import { MainLandingComponent } from './Landing/main-landing/main-landing.component';
import { BussinessComponent } from './Landing/main-landing/bussiness/bussiness.component';
import { CategoriesComponent } from './Landing/main-landing/categories/categories.component';
import { EducationComponent } from './Landing/main-landing/education/education.component';
import { LearningComponent } from './Landing/main-landing/learning/learning.component';
import { PartnersComponent } from './Landing/main-landing/partners/partners.component';
import { SliderHomeComponent } from './Home/main/sliderHome/sliderHome.component';
import { FooterComponent } from './Landing/main-landing/footer/footer.component';
import { NavbarComponent } from './Landing/main-landing/navbar/navbar.component';
import { SliderComponent } from './Landing/main-landing/slider/slider.component';
import { MainHomeThreeComponent } from './HomeThree/main-home-three/main-home-three.component';

import { CateThreeComponent } from './HomeThree/main-home-three/cate-three/cate-three.component';
import { FooterThreeComponent } from './HomeThree/main-home-three/footer-three/footer-three.component';
import { NavebarThreeComponent } from './HomeThree/main-home-three/navebar-three/navebar-three.component';
import { SliderThreeComponent } from './HomeThree/main-home-three/slider-three/slider-three.component';
import { TestimnailThreeComponent } from './HomeThree/main-home-three/testimnail-three/testimnail-three.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogComponent } from './HomeThree/main-home-three/blog/blog.component';
import { BlogfourComponent } from './home-four/blogfour/blogfour.component';
import { CatefourComponent } from './home-four/catefour/catefour.component';
import { FooterfourComponent } from './home-four/footerfour/footerfour.component';
import { NavbarfourComponent } from './home-four/navbarfour/navbarfour.component';
import { SliderfourComponent } from './home-four/sliderfour/sliderfour.component';
import { TestimnailfourComponent } from './home-four/testimnailfour/testimnailfour.component';
import { HomeFourComponent } from './home-four/home-four.component';

import { NgwWowModule } from 'ngx-wow';





@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    ActivityComponent,
    ContactComponent,
    FooterHomeComponent,
    MainComponent,
    MainLandingComponent,
    BussinessComponent,
    CategoriesComponent,
    EducationComponent,
    FooterComponent,
    LearningComponent,
    NavbarComponent,
    PartnersComponent,
    SliderHomeComponent,
    SliderComponent,
    MainHomeThreeComponent,
    CateThreeComponent,
    FooterThreeComponent,
    NavebarThreeComponent,
    SliderThreeComponent,
    TestimnailThreeComponent,
    BlogComponent,
    BlogfourComponent,
    CatefourComponent,
    FooterfourComponent,
    NavbarfourComponent,
    SliderfourComponent,
    TestimnailfourComponent,
    HomeFourComponent,
    BlogfourComponent,
    CatefourComponent,
    FooterfourComponent,
    NavbarfourComponent,
    SliderfourComponent,
    TestimnailfourComponent






  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
