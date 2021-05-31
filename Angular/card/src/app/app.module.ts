import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { AllRouterModule } from './all-router.module';
import { TemplateComponent } from './template/template.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    TemplateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AllRouterModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
