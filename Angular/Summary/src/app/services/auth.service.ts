import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class AuthData{
  subject =new Subject<number>();
  getData(sum1:number,sum2:number){
    this.subject.subscribe((value)=>{
      return value = sum1+sum2
    })
  }
}
