import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  phone: string;
  company: { name: string; catchPhrase: string; bs: string };
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  customers: User[] | any;

  constructor(private http: HttpClient) {}
  addUsers(user: User): Observable<User> {
    return this.http.post<User>(
      'https://jsonplaceholder.typicode.com/users',
      user
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id: number){
    this.getUsers().subscribe((user) => {
      this.customers = user;
      console.log('Customers', this.customers);
      this.customers.find((item) => {
        return item.id === id;
      });
    });
  }
}
