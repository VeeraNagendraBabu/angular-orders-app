import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Customer } from '../models/customer.interface';
import { Order } from '../models/order.interface';
import { Product } from '../models/product.interface';
import { AppData } from './app-data.interface';

export class DbService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo): AppData {
    return {
      customers: createCustomerData(),
      orders: createOrderData(),
      products: createProductData(),
    };
  }
}

function createCustomerData(): Customer[] {
  return [
    {
      id: 1,
      name: 'Maria Anders',
      address: 'Obere Str. 57',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      id: 2,
      name: 'Ana Trujillo',
      address: 'Avda. de la Constitución 2222',
      city: 'Mexico D.F',
      country: 'Mexico',
    },
    {
      id: 3,
      name: 'Thomas Hardy',
      address: '120 Hanover  Sq.',
      city: 'London',
      country: 'United Kingdom',
    },
  ];
}

function createOrderData(): Order[] {
  return [
    {
      id: 11079,
      customerId: 1,
      date: new Date(2019, 5, 6).toISOString(),
      productId: 1,
    },
    {
      id: 11077,
      customerId: 1,
      date: new Date(2019, 5, 7).toISOString(),
      productId: 2,
    },
    {
      id: 11076,
      customerId: 2,
      date: new Date(2019, 6, 9).toISOString(),
      productId: 3,
    },
    {
      id: 11075,
      customerId: 2,
      date: new Date(2019, 4, 3).toISOString(),
      productId: 4,
    },
    {
      id: 11074,
      customerId: 3,
      date: new Date(2021, 6, 7).toISOString(),
      productId: 5,
    },
    {
      id: 11073,
      customerId: 3,
      date: new Date(2021, 4, 8).toISOString(),
      productId: 6,
    },
  ];
}

export function createProductData(): Product[] {
  return [
    { id: 1, name: 'Filo Mix', price: 7 },
    { id: 2, name: 'Camembert Pierrot', price: 34 },
    { id: 3, name: 'Mascarpone Fabioli', price: 32 },
    { id: 4, name: 'Röd Kaviar', price: 15 },
    { id: 5, name: 'Chocolade', price: 12.75 },
    { id: 6, name: 'Ipoh Coffee', price: 46 },
  ];
}
