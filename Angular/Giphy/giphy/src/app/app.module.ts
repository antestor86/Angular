import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http'
import { InputgifComponent } from './inputgif/inputgif.component';
import { LiveService } from './services/live.service';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    InputgifComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [LiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
