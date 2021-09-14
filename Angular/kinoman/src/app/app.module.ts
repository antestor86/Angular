import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { TemplateComponent } from './template/template.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { activeElement } from './directives/active.directive';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoComponent,
    TemplateComponent,
    activeElement

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
