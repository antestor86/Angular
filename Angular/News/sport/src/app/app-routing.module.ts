import { RouterModule, Routes } from '@angular/router';

import { ArmenianComponent } from './armenian/armenian.component';
import { InternationalComponent } from './international/international.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { VideosComponent } from './videos/videos.component';
import { AdminComponent } from './admin/admin.component';
import { SpainComponent } from './international/spain/spain.component';
import { EnglandComponent } from './international/england/england.component';
import { ItalyComponent } from './international/italy/italy.component';
import { GermanComponent } from './international/german/german.component';
import { FranceComponent } from './international/france/france.component';
import { ChamponsComponent } from './international/champons/champons.component';
import { EuropeComponent } from './international/europe/europe.component';
import { NationsComponent } from './international/nations/nations.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'international',
    children: [
      { path: 'spain', component: SpainComponent },
      { path: 'england', component: EnglandComponent },
      { path: 'italy', component: ItalyComponent },
      { path: 'german', component: GermanComponent },
      { path: 'france', component: FranceComponent },
      { path: 'champions', component: ChamponsComponent },
      { path: 'europe', component: EuropeComponent },
      { path: 'nations', component: NationsComponent },
    ],
  },
  { path: 'armenian', component: ArmenianComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
