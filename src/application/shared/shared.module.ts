import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { CardFullSizeComponent } from './card-full-size/card-full-size.component';
import { CardPosterComponent } from './card-poster/card-poster.component';
import { ModalComponent } from './modal/modal.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { AlertsComponent } from './alerts/alerts.component';

const components = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  CardFullSizeComponent,
  CardPosterComponent,
  ModalComponent,
  ErrorDialogComponent,
  AlertsComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule.forChild([])],
  exports: components,
})
export class SharedModule {}
