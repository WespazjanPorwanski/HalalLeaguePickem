import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {WeekPickerComponent} from './team-picker/week-picker/week-picker.component';
import {TeamPickerComponent} from './team-picker/team-picker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {RankingComponent} from './ranking/ranking.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  {path: 'ranking', component: RankingComponent},
  {path: 'picker', component: TeamPickerComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeekPickerComponent,
    TeamPickerComponent,
    RankingComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase) as ModuleWithProviders<AngularFireModule>,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
