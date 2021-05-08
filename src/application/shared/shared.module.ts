import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { CardFullSizeComponent } from './card-full-size/card-full-size.component';

const components = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  CardFullSizeComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule.forChild([])],
  exports: components,
})
export class SharedModule {}
