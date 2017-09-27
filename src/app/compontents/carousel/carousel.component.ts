import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Swiper:any;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  constructor( ) { }

  ngOnInit() {  
    var mySwiper = new Swiper('.swiper-container',{
      loop:true,
      autoplay:3000,
      loopedSlides:4,
      keyboardControl:true,
      pagination:'.swiper-pagination',
      paginationClickable:true,
      paginationBulletRender:function(swiper,index,className){
        return '<span class="'+ className + '">'+
        '<img src="assets/img/swiperImg/show0'+(index+1)+'.jpeg">'+'</span>'
      }
    });
  }
  

}
