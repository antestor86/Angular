import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhoneService } from './phone.service';
import { PhonesComponent } from './phones/phones.component';
import { PostComponent } from './post/post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AboutComponent } from './about/about.component';
import { ExtraComponent } from './extra/extra.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonesComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    AdminpageComponent,
    AboutComponent,
    ExtraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
