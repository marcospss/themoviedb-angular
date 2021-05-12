import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

export const DETAILS_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DETAILS_ROUTES)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
