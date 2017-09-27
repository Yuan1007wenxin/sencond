import { Injectable } from '@angular/core';
import {Comment} from '../../extras/comment'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  constructor() { }
  public addComment(comment:Comment):Observable<any>
  {
    return null;
  }

}
