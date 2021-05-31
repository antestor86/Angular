import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieTemplateComponent } from './movie-template/movie-template.component';
import { MainComponent } from './main/main.component';
import { BeersComponent } from './beers/beers.component';
import { SetBAckgroundDirective } from './directives/set-background.directive';
import { BorersDirective } from './directives/borers.directive';
import { ForswitchComponent } from './forswitch/forswitch.component';



@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    MoviesComponent,
    MovieTemplateComponent,
    MainComponent,
    BeersComponent,
    SetBAckgroundDirective,
    BorersDirective,
    ForswitchComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
