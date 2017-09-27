import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router ,private us:UserService) { }
  loginTel:string = "";
  password:string = "";

  ngOnInit() {
  }
  doRegister(){
    this.router.navigate(['/register']);
  }
  doLogin(){
    this.us.login(this.loginTel,this.password).subscribe((data)=>{
    let result = data.json();
    console.log(result);
    //实现页面跳转
    if(result.code=="success"){
      this.router.navigate(['/']);     
    }
      
    })
  }

}
