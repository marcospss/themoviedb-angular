import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  template: `
    <div class="loading-container">
      <div class="container-animation">
        <div class="lds-dual-ring"></div>
        Loading Data... <br />Please wait a moment
      </div>
    </div>
  `,
  styles: [
    `
      .loading-container {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #00000070;
        z-index: 1000;
        overflow: hidden;
        text-transform: uppercase;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        color: #131a20;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, Helvetica, sans-serif;
        font-size: 1.4rem;
      }

      .show-loading {
        display: flex;
      }

      .container-animation {
        position: relative;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background-color: #ffffff90;
        padding: 2rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        overflow: hidden;
        text-align: center;
      }

      .lds-dual-ring {
        display: inline-block;
        width: 64px;
        height: 64px;
        padding-bottom: 1em;
      }

      .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 8px solid #131a20;
        border-color: #131a20 transparent #131a20 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }

      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class AppShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
