import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class AppModule {}
