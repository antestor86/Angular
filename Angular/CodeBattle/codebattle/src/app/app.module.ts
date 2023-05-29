import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import {  RouterModule } from '@angular/router';
import { TaskTwoComponent } from './task-two/task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    MainMenuComponent,
    HomeComponent,
    TaskTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
