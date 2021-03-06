import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';

import { routes } from './app.router'

import { CameraDataService } from './camera-data.service';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CameraDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
