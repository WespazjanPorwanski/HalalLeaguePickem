import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {WeekPickerComponent} from './week-picker/week-picker.component';
import {TeamPickerComponent} from './team-picker/team-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from "@angular/router";
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {path: 'ranking', component: RankingComponent},
  {path: 'picker', component: TeamPickerComponent},
  {path: '', redirectTo: '/picker', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeekPickerComponent,
    TeamPickerComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
