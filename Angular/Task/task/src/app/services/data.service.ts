import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
export interface User {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  address: { street: string; city: string, country: string };
  image: string;
  email: string;
}
@Injectable({ providedIn: 'root' })
export class DataService {
  customers: User[] = [];
  customer:User;
  administrator = { admin: { login: 'admin', password: 'acba123*' } };

  constructor(private http: HttpClient) { }

  addUsers(newUser: User) {
    return this.http
      .post<any>('http://localhost:3000/users', newUser)
      .pipe(tap((value) => (this.customers = [...this.customers, newUser])));
  }



  getUsers(): Observable<User[]> {
    if (this.customers?.length) {
      return of(this.customers);
    }
    return this.http.get<User[]>('http://localhost:3000/users').pipe(
      tap((value) => {
        this.customers = value;
      })
    );
  }

  getById(id: number): Observable<User> {
    const user: User | any = this.getUsers().pipe(
      map((value) => value.find((item) => item.id == id))
    );
    return user;
  }

  removeUsers(id: number) {
    console.log(this.customers);
    return this.http.delete<{}>(`http://localhost:3000/users/${id}`).pipe(
      tap(console.log),
      tap(() => {
        this.customers = this.customers.filter((item) => {
          return item.id != id;
        });
      })
    );
  }


  // editUser(user: User): Observable<any> {
  //   console.log(user)
  //   return this.http.patch(`http://localhost:3000/users/${user.id}`, user)
  //    .pipe(
  //     tap(() => {
  //       this.customers = this.customers.map((item: User) => {
  //         if (item.id == user.id) {
  //           return user;
  //         }

  //          return item
  //        })
  //      }))
  // }

  editUsers(user: User):Observable<User> {
    return this.http
      .patch<any>(`http://localhost:3000/users/${user.id}`, user)
      .pipe(tap((item) => (this.customer = item)));
  }


}
