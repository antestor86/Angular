import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MaintestComponent } from './maintest/maintest.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MaintestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
