import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  //created a subject
  private teacherMsgSrc = new Subject<string>();
  teacherMsg$ = this.teacherMsgSrc.asObservable();

  constructor() { }

  sendMessage(message: string){        
    this.teacherMsgSrc.next(message); //push message
  }
}

