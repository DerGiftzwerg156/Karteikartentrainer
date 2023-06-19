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
import {DialogModule} from "primeng/dialog";
import { RegisterComponent } from './core/register/register.component';
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { LogoutComponent } from './core/logout/logout.component';
import { CreateCollectionComponent } from './core/create-collection/create-collection.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import { HomeSideComponent } from './routerOutlets/home-side/home-side.component';
import { CollectionOverviewComponent } from './routerOutlets/collection-overview/collection-overview.component';
import {RippleModule} from "primeng/ripple";
import { EditCollectionComponent } from './routerOutlets/edit-collection/edit-collection.component';
import {MenubarModule} from "primeng/menubar";
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {AvatarModule} from "primeng/avatar";
import {CheckboxModule} from "primeng/checkbox";
import { StandardCardEditorComponent } from './routerOutlets/edit-collection/standard-card-editor/standard-card-editor.component';
import { MultipleChoiceCardEditorComponent } from './routerOutlets/edit-collection/multiple-choice-card-editor/multiple-choice-card-editor.component';
import { LeranModeComponent } from './routerOutlets/learn-mode/leran-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CreateCollectionComponent,
    HomeSideComponent,
    CollectionOverviewComponent,
    EditCollectionComponent,
    StandardCardEditorComponent,
    MultipleChoiceCardEditorComponent,
    LeranModeComponent
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
    FormsModule,
    DialogModule,
    ToastModule,
    InputTextareaModule,
    RippleModule,
    MenubarModule,
    DropdownModule,
    InputSwitchModule,
    AvatarModule,
    CheckboxModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
