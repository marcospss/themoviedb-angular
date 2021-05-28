import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PwaHelpersService {
  constructor(private swUpdate: SwUpdate) {}

  checkForUpdate(): void {
    this.swUpdate.available.subscribe(() => this.alertUpdate());
  }

  private alertUpdate(): void {
    if (confirm('New version available. Load New Version?')) {
      window.location.reload();
    }
  }
}
