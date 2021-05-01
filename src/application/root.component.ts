import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="main-content">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>
    <app-footer></app-footer>
  `,
})
export class RootComponent {}
