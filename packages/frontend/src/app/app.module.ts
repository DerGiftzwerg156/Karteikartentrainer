import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StandardCardViewComponent} from './standard-card-view/standard-card-view.component';
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {AccordionModule} from "primeng/accordion";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    StandardCardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
