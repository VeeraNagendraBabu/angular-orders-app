import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { AppDataApiService } from '../app-data/app-data-api.service';
import { DataService } from '../app-data/app-dataservice.service';
import { Customer } from '../models/customer.interface';
import { Order } from '../models/order.interface';
import { Product } from '../models/product.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div >
    <select #customerFilter (change)="filterByCustomer($event.target)"  >
    <option value="0"></option>
      <option *ngFor="let customer of dataService.customerChangedSource |async" [value]="customer.id">
      {{customer.name}}
      </option>
    </select>
    <table>
      <thead>
        <th>Order Id</th>
        <th> Customer Name</th>
        <th>Order Date</th>
        <th>Product Name</th>
      </thead>
      <tbody>
      <tr *ngFor="let order of dataService.ordersChangedSource|async">
    <td>{{order.id}}</td>
    <td  *ngIf="customers$"><a [routerLink]="['/customer']" [queryParams]="{id:order.customerId}">{{order.customerId| customerById:customers$  }}</a></td>
    <td>{{order.date | date: 'dd/MM/yyyy'}}</td>
    <td *ngIf="products$">{{order.productId| productById:products$ }}</td>
  </tr>
      </tbody>
    </table>
</div>
  `,
})
export class OrdersPageComponent{
  orders$!: Order[];
  orginalOrders!: Order[];
  products$!: Product[];
  customers$!: Customer[];
  @ViewChild('customerFilter') customerFilter!: ElementRef;

  constructor(private apiDataService: AppDataApiService, public dataService: DataService, private cd: ChangeDetectorRef) {
    this.loadData();
  }
  loadData() {
    forkJoin([this.apiDataService.orders$, this.apiDataService.customers$, this.apiDataService.products$]).subscribe((results: any) => {
      this.dataService.ordersChangedSource.next(results[0]);
      this.dataService.customerChangedSource.next(results[1]);
      this.customers$ = results[1];
      this.products$ = results[2];
      this.orders$ = results[0]; 
      if (this.dataService.selectedCustomer.value != 0) {
        this.filterOrders(this.dataService.selectedCustomer.value);
        this.customerFilter.nativeElement.value = this.dataService.selectedCustomer.value;
      } else {
        this.filterByCustomer(null);
      }
    });
  }
  ngAfterViewInit(){
    if (this.dataService.selectedCustomer.value != 0) {
     
    }
  } 
  filterByCustomer(control: any): void {
    if (control && control.value != 0) {
      this.filterOrders(control.value);
      this.dataService.selectedCustomer.next(control.value);
    }
    else {
      this.clearSelection();
    }
  }
  clearSelection() {
    this.dataService.ordersChangedSource.next(this.orders$);
    this.dataService.selectedCustomer.next(0);
  }
  filterOrders(value: any) {
    this.dataService.ordersChangedSource.next(this.orders$.filter(x => x.customerId == value));    
  }
}


