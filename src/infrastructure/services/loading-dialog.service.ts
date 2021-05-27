import { Injectable } from '@angular/core';

@Injectable()
export class LoadingDialogService {
  private opened = false;
  constructor() {}

  showLoading(): boolean {
    return !this.opened;
  }

  hideLoading(): boolean {
    return !this.opened;
  }
}
