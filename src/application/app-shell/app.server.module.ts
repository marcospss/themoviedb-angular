import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from '@application/app.module';
import { RootComponent } from '@application/root.component';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [AppModule, ServerModule, RouterModule.forRoot(routes)],
  bootstrap: [RootComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule {}
