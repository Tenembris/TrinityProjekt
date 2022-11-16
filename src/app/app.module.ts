import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

@NgModule({
  declarations: [AppComponent, routingComponent, ToDoPageComponent, WeatherAppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
