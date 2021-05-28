import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { CommonService } from './services/common.service';
import { MoviesService } from './services/movies.service';
import { HelpersService } from './services/helpers.service';
import { LoadingDialogService } from './services/loading-dialog.service';
import { PwaHelpersService } from './services/pwa-helpers.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ErrorHandlerModule],
  providers: [
    CommonService,
    MoviesService,
    HelpersService,
    LoadingDialogService,
    PwaHelpersService,
  ],
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
