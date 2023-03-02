import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArmenianComponent } from './armenian/armenian.component';
import { BrowserModule } from '@angular/platform-browser';
import { BurgerDirective } from './directives/burger.directive';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InternationalComponent } from './international/international.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { VideosComponent } from './videos/videos.component';
import { SpainComponent } from './international/spain/spain.component';
import { EnglandComponent } from './international/england/england.component';
import { ItalyComponent } from './international/italy/italy.component';
import { GermanComponent } from './international/german/german.component';
import { FranceComponent } from './international/france/france.component';
import { ChamponsComponent } from './international/champons/champons.component';
import { EuropeComponent } from './international/europe/europe.component';
import { NationsComponent } from './international/nations/nations.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AdminComponent,
    MainComponent,
    InternationalComponent,
    ArmenianComponent,
    VideosComponent,
    SliderComponent,
    BurgerDirective,
    MenuitemComponent,
    SpainComponent,
    EnglandComponent,
    ItalyComponent,
    GermanComponent,
    FranceComponent,
    ChamponsComponent,
    EuropeComponent,
    NationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
