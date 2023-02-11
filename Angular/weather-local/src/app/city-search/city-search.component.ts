import { Component, OnInit } from '@angular/core';

import {Validators} from "@angular/forms";
import {Output,EventEmitter} from "@angular/core";

import {FormControl} from "@angular/forms";
import {WeatherService} from "../services/weather.service";
import {debounceTime,filter,tap} from "rxjs/operators";



@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Output()searchEvent = new EventEmitter<string>()
  search = new FormControl('',[Validators.minLength(2)])
  constructor(private weatherservice:WeatherService) {
    this.search.valueChanges.
      pipe(
        debounceTime(1000),
        filter(()=>!this.search.invalid),
       tap((searchValue:string)=>this.doSearch(searchValue))
    ).subscribe()
  }

  ngOnInit(): void {
   /* this.search.valueChanges.pipe(debounceTime(1000))
      .subscribe(
      (searchValue:string)=>{
        if(searchValue){
          this.searchEvent.emit(searchValue)
          const userInput = searchValue.split(',').map(s=>s.trim())
          this.weatherservice.updateCurrentWeather(userInput[0],userInput.length > 1 ?userInput[1]:undefined)
        }
      }
    )*/
  }

  doSearch(searchValue:string){
    const userInput = searchValue.split(',').map(
      s=>s.trim()
    )
    const searchText = userInput[0]
    const country = userInput.length > 1 ? userInput[1]:undefined
    this.weatherservice.updateCurrentWeather(searchText,country)
  }

}


