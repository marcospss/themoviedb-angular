import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component';

import { SharedModule } from '@application/shared/shared.module';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@infrastructure/environments/environment';
@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    InfrastructureModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
