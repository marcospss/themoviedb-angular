import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '@application/shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, DetailsRoutingModule, SharedModule],
})
export class DetailsModule {}
