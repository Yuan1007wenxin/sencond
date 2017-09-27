import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Tour } from '../../extras/tour';

@Injectable()
export class TournoteService {
  constructor(private http:Http){}
  findBypage(pageNo:number = 1):Observable<any>
  {
    return null;
  }
  findNoteDetailById(id:number = 1):Observable<any>
  {
    return null;
  }

 public(tour:Tour):Observable<any>{
   return null;
 }

}
