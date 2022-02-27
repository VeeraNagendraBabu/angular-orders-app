import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppDataApiService } from '../app-data/app-data-api.service';
import { Customer } from '../models/customer.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul *ngIf="customer">
      <li>Customer Id: {{customer.id}}</li>
      <li>Customer Name: {{customer.name}}</li>
      <li>Customer Address: {{customer.address}}</li>
      <li>Customer City: {{customer.city}}</li>
      <li>Customer Country: {{customer.country}}</li>
    </ul>
  `,
})
export class SelectedCustomerPageComponent implements OnInit {
  customer!: Customer;
  selected: any;
  constructor(private dataService: AppDataApiService, private change: ChangeDetectorRef, private route: ActivatedRoute) {
    this.dataService.customers$.subscribe((data: Customer[]) => {
      this.customer = data.filter(o => o.id === this.selected)[0];
      this.change.markForCheck();
    });
  }
  ngOnInit(): void {

    this.route.queryParams.subscribe((params: { [x: string]: string | number; }) => {
      this.selected = +params['id'];
      this.change.markForCheck();
    });
  }
}
