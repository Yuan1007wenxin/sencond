import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
//导入模块
import { Http,URLSearchParams } from "@angular/http";



@Injectable()
export class UserService {

  constructor(private http:Http) { }

  public checkedLogin():Observable<any>{
    let params = new URLSearchParams();
    return this.http.get("/tournote/checkLogin.php");
  }


  public login(tel:string,password:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    params.append("pwd",password);
    return this.http.post("/tournote/login.php",params);
  }


  public regist(tel:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    return this.http.post("/tournote/regist.php",params);
  }

}
