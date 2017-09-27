import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  userStatus:boolean = false;
  user:object = {};

  constructor( private router:Router,private us:UserService) { }

  ngOnInit() {
    this.us.checkedLogin().subscribe((data)=>{
      let result = data.json();
      this.userStatus = result.status;       
      if(result.status){
        this.user = result.user;
        return;
      }
      this.user = {};
    });
  }

  addUrl(url:string){
    console.log(url);
    if(url==undefined){
      return "";
    }
    return "http://127.0.0.1/tournote/img/"+url;
  }



  
  handleMouse(){
    this.router.navigate(['/carousel']);
  }
  handleTogether(){
    this.router.navigate(['/together']);
    
  }
  doRegister(){
    this.router.navigate(['/register']);
    
  }
  doLogin(){
    this.router.navigate(['/login']);
    
  }
  doUserImg(){
    this.router.navigate(['/setuserimg']);
    
  }

}


