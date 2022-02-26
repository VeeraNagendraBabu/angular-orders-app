import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="orders">Orders</a> |
      <a routerLink="customer">Customer</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
