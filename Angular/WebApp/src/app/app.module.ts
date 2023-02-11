import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { AddColorDirective } from './directives/add-color.directive';
import { ItemsComponent } from './items/items.component';
import { AddShadowsDirective } from './directives/add-shadows.directive';
import { GameFilterPipe } from './pipes/game-filter.pipe';
import { ActivebuttonDirective } from './directives/activebutton.directive';
import {ReactiveFormsModule} from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    AddColorDirective,
    ItemsComponent,
    AddShadowsDirective,
    GameFilterPipe,
    ActivebuttonDirective,
    
    
    
   
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
