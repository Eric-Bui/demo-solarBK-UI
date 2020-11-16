import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from '@ngrx/store';
import { GlobalModule } from "./global/global.module";

import { AdminModule } from './components/admin/admin.module';
import { SwhModule } from './components/swh/swh.module'
import { PvModule } from './components/pv/pv.module'

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SwhComponent } from './components/swh/swh.component';
import { PvComponent } from './components/pv/pv.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    SwhComponent,
    PvComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SwhModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GlobalModule,
    PvModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
