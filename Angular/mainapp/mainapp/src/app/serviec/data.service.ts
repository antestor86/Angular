import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {
  constructor(private http:HttpClient){}

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}

