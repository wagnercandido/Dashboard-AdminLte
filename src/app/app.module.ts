import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { NgModule } from '@angular/core';
// import { MaterialModule } from './Util/material.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from '../app/Features/dashboard/dashboard.module';
import { LoginModule } from '../app/Features/login/login.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    // BrowserAnimationsModule,
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
