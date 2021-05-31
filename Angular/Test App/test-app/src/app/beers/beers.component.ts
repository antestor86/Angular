import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  @Input() beerContainer : {
    beer: string|undefined;
    url: string|undefined;
    type: string|undefined;
    price: number|undefined;
    id: number|undefined;
  } | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  changeBackground = false;
  addBorder() {
    if (!this.changeBackground) {
      this.changeBackground = true
    }
    else {
      this.changeBackground = false;
    }
  }
}
