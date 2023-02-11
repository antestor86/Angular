import {Injectable} from "@angular/core";
import {HttpClient,HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable,BehaviorSubject} from "rxjs";
import {ICurrentWeather} from "../Interfaces/interfaces";
import {map} from "rxjs/operators";


interface ICurrentWeatherData{
  weather:[{
    description:string,
    icon:string
  }],
  main:{
    temp:number
  },
  sys:{
    city:string
    country:string
  },
  dt:number,
  name:string
}

@Injectable({providedIn:'root'})
export class WeatherService {
  readonly currentWeather$= new BehaviorSubject<ICurrentWeather>({
    city:'--',
    country:'--',
    date: Date.now(),
    image:'',
    temperature:0,
    description:''
  })
  constructor(private httpClient:HttpClient) {

  }

  getCurrentWeather(search:string|number,country?:string):Observable<ICurrentWeather>{

      let uriParams=new HttpParams()

      if(typeof search === 'string'){
        uriParams = uriParams.set('q',country?`${search},${country}`:search)
      }
      else{
        uriParams = uriParams.set('zip','search')
      }


     uriParams = uriParams.set('appid',environment.appId)
        return this.httpClient
      .get<ICurrentWeatherData>
      (`${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,{params:uriParams})
          .pipe(map(data=>this.transformToICurrentWeather(data)))
  }

  /*private getCurrentWeatherHelper(uriParams:HttpParams):Observable<ICurrentWeather> {
    uriParams = uriParams.set('appid',environment.appId)
     return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather`,{params:uriParams})
       .pipe(map(data=>{
      this.transformToICurrentWeather(data)
    }
  }*/


  private transformToICurrentWeather(data:ICurrentWeatherData):ICurrentWeather{
    return {
      city:data.name,
      country:data.sys.country,
      date:data.dt*1000,
      image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature:this.convertKelvinToFarenheight(data.main.temp),
      description:data.weather[0].description

    }
  }


  private convertKelvinToFarenheight(kelvin:number):number{
    return kelvin*9/5-459.67
  }

  updateCurrentWeather(search:string|number,country?:string):void{
    this.getCurrentWeather(search,country).subscribe(
      weather=>this.currentWeather$.next(weather)
    )
  }


}

