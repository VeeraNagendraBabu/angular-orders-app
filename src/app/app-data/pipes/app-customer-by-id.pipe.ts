import { PipeTransform, Pipe } from "@angular/core";
import { Customer } from "src/app/models/customer.interface";

@Pipe({
  name: 'customerById'
})
export class CustomerByIdPipe implements PipeTransform {
  transform(customerId: number, customers: Customer[]): string {
    const customer = customers.find(customer => customer.id === customerId);
    return customer ? customer.name : "";
  };
}
