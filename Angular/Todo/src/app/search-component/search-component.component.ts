import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Item } from '../../assets/item.model';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  @Output()title=new EventEmitter<string>();
  data:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.title.emit(this.data);
    console.log(this.data)

  }

}
