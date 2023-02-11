import { Component } from '@angular/core';
import {ICurrentWeather} from "./Interfaces/interfaces";
import {WeatherService} from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'weather-local';
  currentWeather:|any
  constructor(private weatherService:WeatherService) {
  }

  doSearch(searchValue:any){
    const userInput = searchValue.split(',').map((s:any) => s.trim())
    this.weatherService.getCurrentWeather(
      userInput[0],
      userInput.length > 1 ? userInput[1] : undefined
    ).subscribe(data => this.currentWeather=data)
  }


}
