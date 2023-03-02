import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DataService, Items } from '../services/data.service';
import { MenuItems } from '../interfaces/menuItems.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuitems!: String[];
  private sub: any;

  isOpen = false;
  burgerStatuss = false;
  burgerItems$ = this.getBurgerItems();
  internatioal: String = '';
  constructor(
    private data: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    return this.data.getMenuItems().subscribe((item) => {
      this.menuitems = item;
    });
  }

  getBurgerItems(): Observable<Items[]> {
    return this.data.getBurgerItems();
  }

  toogle(elem: HTMLElement) {
    console.log(elem.innerHTML);
    if (elem.innerText === 'Միջազգային ֆուտբոլ') {
      if (!this.isOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }

      console.log('Menu Is Opened');
    } else {
      console.log('Menu Is Not opened');
      this.isOpen = false;
    }
  }

  enterInternationalContent(path: string): void {
    this.router.navigate([`international/${path}`]);
  }

  goToContent(event: HTMLElement) {
    if (event.innerText === 'Գլխավոր') {
      this.burgerStatuss = false;
      this.router.navigate(['/']);
    }

    if (event.innerText === 'Հայկական Ֆուտբոլ') {
      this.burgerStatuss = false;
      this.router.navigate(['/armenian']);
    }
    if (event.innerText === 'Տեսանյութեր') {
      this.burgerStatuss = false;
      this.router.navigate(['/videos']);
    }
    if (event.innerText === 'Միջազգային ֆուտբոլ') {
      this.burgerStatuss = false;
      this.router.navigate(['/international']);
    }
  }
}
