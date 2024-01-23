import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import {  RouterModule } from '@angular/router';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskfourComponent } from './taskfour/taskfour.component';
import { TaskfiveComponent } from './taskfive/taskfive.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    MainMenuComponent,
    HomeComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskfourComponent,
    TaskfiveComponent
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
