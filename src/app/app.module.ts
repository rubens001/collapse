import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { DropdownButtonComponent } from './feature/dropdown-button/dropdown-button.component';
import { CollapsibleComponent } from './feature/collapsible/collapsible.component';
import { ChevronComponent } from './feature/chevron/chevron.component';

@NgModule({
  declarations: [
    AppComponent,
    CollapsibleComponent,
    ChevronComponent,
    DropdownButtonComponent,
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
