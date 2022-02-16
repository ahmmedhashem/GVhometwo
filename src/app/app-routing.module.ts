import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFourComponent } from './home-four/home-four.component';
import { MainComponent } from './Home/main/main.component';
import { MainHomeThreeComponent } from './HomeThree/main-home-three/main-home-three.component';
import { MainLandingComponent } from './Landing/main-landing/main-landing.component';

const routes: Routes = [
    { path: 'HomeOne', component: MainComponent},
    { path: 'HomeTwo', component: MainLandingComponent},
    { path: 'HomeThree', component: MainHomeThreeComponent},
    { path: 'HomeFour', component: HomeFourComponent},
    { path: '',   redirectTo: '/HomeTwo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
