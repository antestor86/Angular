import { Component, OnInit } from '@angular/core';

import {ICurrentWeather} from "../Interfaces/interfaces";
import {WeatherService} from "../services/weather.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {SubSink} from "subsink";
import {Observable} from "rxjs";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  private subscription = new SubSink()
  param = "Hello"
  current:Observable<ICurrentWeather>|any
  currentWeatherSubscription:Subscription|any;
  constructor(private weatherService:WeatherService) {
      this.current = this.weatherService.currentWeather$
  }

  ngOnInit(): void {
    this.subscription.add(
      this.weatherService.currentWeather$.subscribe(
        (data)=>(this.current = data)
      )
    )

    /*this.currentWeatherSubscription =
    this.weatherService.currentWeather$
      .subscribe((data)=>{
       return  this.current = data

      })*/
  }

  ngOnDestroy():void{
      //this.currentWeatherSubscription.unsubscribe()

      this.subscription.unsubscribe()
  }

  //test



}
