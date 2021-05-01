import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component';

import { SharedModule } from '@application/shared/shared.module';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
