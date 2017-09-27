import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeadComponent } from './compontents/head/head.component';
import { CarouselComponent } from './compontents/carousel/carousel.component';
import { FooterComponent } from './compontents/footer/footer.component';
import { TravelComponent } from './compontents/travel/travel.component';
import { TravelDetailsComponent } from './compontents/travel/travel-details/travel-details.component';
import { ItemComponent } from './compontents/item/item.component';
import { IsSueComponent } from './compontents/go-with/is-sue/is-sue.component';
import { DetailsComponent } from './compontents/go-with/details/details.component';
import { TogetherComponent } from './compontents/go-with/together/together.component';
import { UEditorConfig,UEditorModule } from 'ngx-ueditor';
import { RegisterComponent } from './compontents/user/register/register.component';
import { LoginComponent } from './compontents/user/login/login.component';
import { SetUserImgComponent } from './compontents/user/set-user-img/set-user-img.component';
import { SetUserImageComponent } from './compontents/user/set-user-image/set-user-image.component';
import { SetPsswordComponent } from './compontents/user/set-pssword/set-pssword.component';
import { MyreleaseComponent } from './compontents/user/myrelease/myrelease.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './compontents/main/main.component';
import { UserService } from './services/user/user.service';




@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,   
    CarouselComponent, FooterComponent, 
    TravelComponent, TravelDetailsComponent, 
    ItemComponent, IsSueComponent, DetailsComponent, MainComponent,
    TogetherComponent, RegisterComponent, LoginComponent, SetUserImgComponent, SetUserImageComponent, SetPsswordComponent, MyreleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UEditorModule
  ],
  providers: [
    UEditorConfig,
    UserService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
