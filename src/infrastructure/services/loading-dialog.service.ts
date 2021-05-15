import { Injectable } from '@angular/core';

@Injectable()
export class LoadingDialogService {
  private opened = false;
  constructor() {}

  showLoading(): boolean {
    console.log('openLoading', this.opened);
    return !this.opened;
  }

  hideLoading(): boolean {
    console.log('hideLoading', this.opened);
    return !this.opened;
  }
}
