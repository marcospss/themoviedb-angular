import { Component, OnInit } from '@angular/core';
import { PwaHelpersService } from '@infrastructure/services';
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-alerts *ngIf="isOffline" alertType="danger">
      Offline... Await Internet Connection
    </app-alerts>
    <main class="main-content">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer></app-footer>
    <app-modal></app-modal>
    <!-- <app-loading></app-loading> -->
  `,
})
export class RootComponent implements OnInit {
  isOffline: boolean = true;

  constructor(pwaHelpersService: PwaHelpersService) {
    pwaHelpersService.checkForUpdate();
  }
  onNetworkStatusChange() {
    this.isOffline = !window.navigator.onLine;
  }

  ngOnInit(): void {
    this.onNetworkStatusChange();
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }
}
