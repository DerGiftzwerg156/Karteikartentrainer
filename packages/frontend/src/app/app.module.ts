import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";
import { LoginComponent } from './core/login/login.component';
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule,
    FormsModule,
    ChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
