import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
export interface User {
  id?: number;
  name: string;
  surname: string;
  age: string;
  country: string;
  city: string;
  addresses: string[];
  gender: string;
  avatar: string;
  phones: { mobile: string; home: string };
  skills: string[];
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  customers: User[] | any;

  constructor(private http: HttpClient) {}
  addUsers(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:4200/assets/db.json', user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:4200/assets/db.json');
  }

  removeUser(id: number) {
    return this.http.delete<void>(
      `http://localhost:4200/assets/db.json/user/${id}`
    );
  }

  getById(id: number): Observable<User> {
    const findUser = this.getUsers().pipe(
      map((val: User[]) => val.find((item) => item.id == id))
    );

    return findUser;
  }
}
