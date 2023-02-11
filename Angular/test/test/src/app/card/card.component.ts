import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  form:FormGroup|any;
  background = "./assets/background.jpg";
  cardHolderName = "name"
  cardHolderSurname = "surname"
  space = " "
  firstOctate = "0000 ";
  secondOctate = "0000 ";
  thirdthOctate = "0000 ";
  forthOctate = "0000 ";
  dateNumber = "00";
  cvcCode = "cvc"
  maxLength = 4;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup
    ( {

      cardholder:new FormGroup({
        name:new FormControl("",Validators.required),
        surname:new FormControl("",Validators.required)
      }),

      cardNumber:new FormGroup({
        firstOctate:new FormControl("0000",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')]),
        secondOctate:new FormControl("0000",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')]),
        thirdthOctate:new FormControl("0000",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')]),
        fourthOctate:new FormControl("0000",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')])
      }),

      ecspDate:new FormGroup({
        mounth:new FormControl("00",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')]),
        year:new FormControl("00",[Validators.required,Validators.maxLength(4),Validators.pattern('0-9')])
      }),


      threeCvc:new FormControl("000",[Validators.required,Validators.maxLength(3),Validators.pattern('0-9')])


    })

  }

  getFormValue(){
    const formData = {...this.form.value}
    console.log(formData)
  }




}
