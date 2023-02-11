import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MenuItems} from "./Services/menudata.service";
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './article/article.component';
import { LinksComponent } from './links/links.component';
import { PlansComponent } from './plans/plans.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ArticleComponent,
    LinksComponent,
    PlansComponent,
    AdminComponent,
    CalculatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [MenuItems,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
