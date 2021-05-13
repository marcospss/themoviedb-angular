import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { CardFullSizeComponent } from './card-full-size/card-full-size.component';
import { CardPosterComponent } from './card-poster/card-poster.component';

const components = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  CardFullSizeComponent,
  CardPosterComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule.forChild([])],
  exports: components,
})
export class SharedModule {}
