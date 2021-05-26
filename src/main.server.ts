import { enableProdMode } from '@angular/core';

import { environment } from '@infrastructure/environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from '@application/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
