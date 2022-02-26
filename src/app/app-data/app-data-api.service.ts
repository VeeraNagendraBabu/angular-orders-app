import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.interface';
import { Order } from '../models/order.interface';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class AppDataApiService {
  products$: Observable<Product[]> = this.http.get<Product[]>('api/products');

  customers$: Observable<Customer[]> =
    this.http.get<Customer[]>('api/customers');

  orders$: Observable<Order[]> = this.http.get<Order[]>('api/orders');

  constructor(private http: HttpClient) {}
}
