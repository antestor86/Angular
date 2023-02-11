import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../assets/item.model';
import { Requests } from '../../services/data.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  form:FormGroup|any;
  @Input()
  listItem:Item = {label:"",completed:false};
  constructor(private requests:Requests) { }

  ngOnInit(): void {
    this.formInit();
  }
  formInit(){
    this.form = new FormGroup({
      label:new FormControl(""),
      completed:new FormControl(false),
    })
  }

  onSubmit(){
    this.listItem = {...this.form.value};
  }

}
