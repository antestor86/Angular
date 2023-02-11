import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MenuItems } from '../../interfaces/menuItems.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  @Input() item!: String
  burgerItems: String[] = [];
  isOpen: Boolean = false;


  constructor(private data: DataService) { }

  ngOnInit(): void {

  }





}
