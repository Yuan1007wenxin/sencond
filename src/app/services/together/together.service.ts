import { Injectable } from '@angular/core';
import { Together } from '../../extras/together';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TogetherService {

  constructor() { }
  public add(together:Together):Observable<any>{
    return null;
}

public list(pageNo:number=1):Observable<any> // Array<Together>
{
  return null;
}

public findById(id:number):Observable<any>// Together
{
  return null;
}

public joinIn(maleNum:number,femaleNum:number,tel:string):Observable<any>
{
  return null;
}

}
