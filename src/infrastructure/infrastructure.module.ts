import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommonService } from './services/common.service';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CommonService, MoviesService],
})
export class InfrastructureModule {
  static forRoot(): ModuleWithProviders<InfrastructureModule> {
    return {
      ngModule: InfrastructureModule,
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: InfrastructureModule
  ) {
    if (parentModule) {
      throw new Error(
        'Infrastructure Module is already loaded. Import it in the AppModule only'
      );
    }
  }
}
