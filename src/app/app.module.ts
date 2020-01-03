import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterModule } from './counter/counter.module';
import { ThemeModule } from './theme/theme.module';
import { ItemTemplateComponent } from './item-template/item-template.component';


import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ItemTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,

    CounterModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
