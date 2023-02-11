import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./Services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {User} from "./Models/user.model";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthComponent,
    RegComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
  providers: [AuthService,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
