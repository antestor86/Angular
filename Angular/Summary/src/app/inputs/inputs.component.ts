import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  form:FormGroup|any;
  sum:number|undefined
  constructor() { }

  ngOnInit(): void {
    this.formInit();
    console.log(this.form.value)

  }
  formInit(){
    this.form =  new FormGroup({
       firstValue:new FormControl(),
       secondValue:new FormControl()
    })
  }
}
