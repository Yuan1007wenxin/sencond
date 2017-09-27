import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './compontents/main/main.component';
import { CarouselComponent } from './compontents/carousel/carousel.component';
import { TravelDetailsComponent } from './compontents/travel/travel-details/travel-details.component';
import { TravelComponent } from './compontents/travel/travel.component';
import { DetailsComponent } from './compontents/go-with/details/details.component';
import { IsSueComponent } from './compontents/go-with/is-sue/is-sue.component';
import { TogetherComponent } from './compontents/go-with/together/together.component';
import { SetUserImageComponent } from './compontents/user/set-user-image/set-user-image.component';
import { SetUserImgComponent } from './compontents/user/set-user-img/set-user-img.component';
import { SetPsswordComponent } from './compontents/user/set-pssword/set-pssword.component';
import { MyreleaseComponent } from './compontents/user/myrelease/myrelease.component';
import { LoginComponent } from './compontents/user/login/login.component';
import { RegisterComponent } from './compontents/user/register/register.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:CarouselComponent},
    {path:'carousel',component:CarouselComponent},
    {path:'traveldetails',component:TravelDetailsComponent},
    {path:'travel',component:TravelComponent},
    {path:'details',component:DetailsComponent},
    {path:'issue',component:IsSueComponent},
    {path:'together',component:TogetherComponent},
    {path:'setuserimg',component:SetUserImgComponent},
    {path:'setuserimage',component:SetUserImageComponent},
    {path:'setpssword',component:SetPsswordComponent},
    {path:'myrelease',component:MyreleaseComponent}    
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
