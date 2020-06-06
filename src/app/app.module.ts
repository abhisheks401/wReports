import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitiesComponent } from './presentation/cities/cities.component';
import { WeatherDetailsComponent } from './presentation/weather-details/weather-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from './service/weather.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NoCityAddedComponent } from './presentation/no-city-added/no-city-added.component';

const routes: Routes = [
  {path:'city/:cityName', component: WeatherDetailsComponent},
  {path:'noCityAdded', component: NoCityAddedComponent},
  {path:'**', redirectTo: 'noCityAdded'}
];

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    WeatherDetailsComponent,
    NoCityAddedComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, FormsModule, ReactiveFormsModule, AngularFontAwesomeModule, HttpClientModule
  ],
  providers: [WeatherService, HttpClient, WeatherDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
