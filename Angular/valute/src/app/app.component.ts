import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valute';
  api = 'https://www.cbr-xml-daily.ru/daily_jsonp.js'
}
