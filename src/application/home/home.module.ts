import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@application/shared/shared.module';
import { HOME_ROUTES } from './home.routes';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule.forChild(HOME_ROUTES), SharedModule],
})
export class HomeModule {}
