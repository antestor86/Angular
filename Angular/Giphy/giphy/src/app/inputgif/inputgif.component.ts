import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Observable, Subscriber, Subscription, pipe, tap } from 'rxjs';

import { LiveService } from '../services/live.service';
import { Source } from '../interfaces/source.interface';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-inputgif',
  templateUrl: './inputgif.component.html',
  styleUrls: ['./inputgif.component.css']
})
export class InputgifComponent implements OnInit {
  sub!:Subscription
  images$:Source|undefined
  form!:FormGroup
  @Output() searchValue = new EventEmitter<string>()
  constructor(private data:LiveService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      input:new FormControl('',Validators.required)
    })
  }


  submit(){
    this.searchValue.emit(this.form.value.input)
    //this.searchValue.emit(value)
  }

}
