import { Component } from '@angular/core';

@Component({
  template: `
    <select>
      <!-- 2. TODO implement a select to filter orders by customer name -->
    </select>
    <table>
      <thead>
        <th>Order Id</th>
        <th>Customer Name</th>
        <th>Order Date</th>
        <th>Product Name</th>
      </thead>
      <tbody>
        <!-- 1. TODO display a list of orders here. -->
      </tbody>
    </table>
  `,
})
export class OrdersPageComponent {}
