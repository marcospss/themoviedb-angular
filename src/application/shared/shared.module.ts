import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

const components = [HeaderComponent, FooterComponent, LoadingComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SharedModule {}
