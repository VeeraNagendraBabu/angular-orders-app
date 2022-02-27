import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Customer } from "../models/customer.interface";
import { Order } from "../models/order.interface";
import { Product } from "../models/product.interface";

@Injectable()
export class DataService {
  private emptyData = [];
  customerChangedSource= new BehaviorSubject<Customer[]>(this.emptyData);
  ordersChangedSource= new BehaviorSubject<Order[]>(this.emptyData);
  selectedCustomer= new BehaviorSubject<number>(0);
  constructor() {}

}
