import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  customers: User[] = [];

  constructor(private http: HttpClient) {}

  addUsers(newUser: User): Observable<User> {
    console.log(this.customers);
    return this.http
      .post<any>('https://jsonplaceholder.typicode.com/users', newUser)
      .pipe(tap((value) => (this.customers = [...this.customers, newUser])));
  }

  getUsers(): Observable<User[]> {
    console.log(this.customers);
    if (this.customers?.length) {
      return of(this.customers);
    }
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(tap((value) => (this.customers = value)));
  }

  getById(id: number): Observable<User> {
    const user = this.getUsers().pipe(
      map((value) => value.find((item) => item.id == id))
    );
    return user;
  }

  removeUsers(id: number) {
    console.log(this.customers)
    return this.http
      .delete<{}>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(tap(console.log),
        tap(() => {
          this.customers = this.customers.filter((item) => {
            return item.id != id;
          });
        })
      );

      /*this.customers = this.customers.filter((item) => {
        return item.id != id;
      });
      return of(this.customers)*/
  }
}
