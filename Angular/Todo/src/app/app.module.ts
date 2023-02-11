import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { CompletedComponent } from './completed/completed.component';
import { ListItemComponent } from './list-component/list-item/list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponentComponent,
    ListComponentComponent,
    CompletedComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
