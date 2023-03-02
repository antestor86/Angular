import { Observable, tap } from "rxjs";

import { Article } from '../interfaces/article.interface';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuItems } from '../interfaces/menuItems.interface';

export interface Items {
  displayName: string;
  path: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
    private base = "https://sport-c9f5d-default-rtdb.firebaseio.com/"
    MAIN_URL = `${this.base}/articles.json`;
    MENU_ITEMS = "https://sport-c9f5d-default-rtdb.firebaseio.com/menuItems.json";

    BURGER_ITEMS = "https://sport-c9f5d-default-rtdb.firebaseio.com/international.json";
    articles: Article[] = [];
    menuItems!: MenuItems[];

    burger: String[] = [];
    constructor(private http: HttpClient) {

    }
    getData(): Observable<Article[]> {
        return this.http.get<Article[]>(this.MAIN_URL)
    }

    getMenuItems(): Observable<String[]> {
        return this.http.get<String[]>(this.MENU_ITEMS)
    }

    getBurgerItems(): Observable<Items[]> {
        return this.http.get<Items[]>(this.BURGER_ITEMS)
    }

    setData(article: Article): Observable<Object> {
        return this.http.post(this.MAIN_URL, article).pipe(
            tap(() => this.articles.push(article))
        )
    }
}


