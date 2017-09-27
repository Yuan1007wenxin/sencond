import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  //注入 UserService 的对象
  constructor(private us:UserService, private router:Router) { }
  userTel:string = '';
  msg:string = '';
  styleClass:string = '';

  ngOnInit() {
  }

  doRegiest(){
    //用户注册
    //将数据 userTel 传递到 PHP 的服务器中,执行 数据写入操作
    //订阅 返回数据
    this.us.regist(this.userTel).subscribe((data)=>{
      let result = data.json(); 
      this.msg = result.msg;
      this.styleClass = result.code=="success"?"success":"error";
      console.log(result);      
    });
  }

  doLogin(){
    this.router.navigate(['/login']);
  }


}
