import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Source } from "../interfaces/source.interface";

@Injectable({providedIn:'root'})
export class LiveService{
    //WebPage   = https://developers.giphy.com/explorer/?
    //BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=';

    BASE_URL = 'http://localhost:3000/images'

   /* API_KEY = 'TOWKNk2XxMx3Na4pFZNrmwPICnRV3lsS'
      API_HEADERS = 'q=&limit=25&offset=0&rating=g&lang=en'*/
    constructor(private http:HttpClient){

    }
    getData(){
        return this.http.get<Source[]>(this.BASE_URL)
    }



}
