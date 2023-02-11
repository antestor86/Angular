import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { HostComponent } from './host/host.component';
import { HostsComponent } from './hosts/hosts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { OtherComponent } from './other/other.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchformComponent } from './searchform/searchform.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		HeaderComponent,
		HostsComponent,
		OtherComponent,
		SearchformComponent,
		HostComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
  FontAwesomeModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
