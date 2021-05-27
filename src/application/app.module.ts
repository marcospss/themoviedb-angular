import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component';

import { SharedModule } from '@application/shared/shared.module';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    SharedModule,
    InfrastructureModule.forRoot(),
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
