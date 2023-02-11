import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cashValue = ' '

  displayValue = this.cashValue.toString()

  buffer = 0;
  nextValue = 0;


  action:string = "";

  calc = [

  ]

  numbers = [
    {value:1,ondisplay:"1"},
    {value:2,ondisplay:"2"},
    {value:3,ondisplay:"3"},
    {value:4,ondisplay:"4"},
    {value:5,ondisplay:"5"},
    {value:6,ondisplay:"6"},
    {value:7,ondisplay:"7"},
    {value:8,ondisplay:"8"},
    {value:9,ondisplay:"9"},
    {value:0,ondisplay:"0"},

  ]

  actions = [
    {value:"+",action:false},
    {value:"-",action:false},
    {value:"/",action:false},
    {value:"*",action:false},
    {value:"C",action:false},
    {value:"=",action:false}

  ]
  constructor() { }

  ngOnInit(): void {

  }


  changeDisplayValue(item:string){
        this.displayValue +=  item
  }


  clearValue(){
    this.displayValue = " "
  }

  addValue(){
    this.buffer = Number(this.displayValue)
    this.displayValue = this.buffer.toString()+ "+"
    console.log(`${this.buffer} in Buffer`)

  }

  subValue(){

  }

  multipleValue(){

  }

  divideValues(){

  }

  equalResult(){

  }


  doAction(item:string):any{
    switch (item) {
      case "+":
        return this.addValue()
        break

      case "-":
        return this.subValue()
        break

      case "*":
        return this.multipleValue()
        break

      case "/":
        return this.divideValues()
        break
      case "C":
        return this.clearValue()
        break
      case "=":
        return this.equalResult()
        break
    }

  }

}
