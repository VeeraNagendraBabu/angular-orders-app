import { Customer } from '../models/customer.interface';
import { Order } from '../models/order.interface';
import { Product } from '../models/product.interface';

export interface AppData {
  customers: Customer[];
  products: Product[];
  orders: Order[];
}
