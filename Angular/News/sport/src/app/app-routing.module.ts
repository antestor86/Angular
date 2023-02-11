import { RouterModule, Routes } from '@angular/router';

import { ArmenianComponent } from './armenian/armenian.component';
import { InternationalComponent } from './international/international.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'international', component: InternationalComponent },
  { path: 'armenian', component: ArmenianComponent },
  { path: 'videos', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
