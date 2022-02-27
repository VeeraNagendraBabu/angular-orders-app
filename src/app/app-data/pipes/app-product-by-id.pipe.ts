import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "src/app/models/product.interface";

@Pipe({
  name: 'productById'
})
export class ProductByIdPipe implements PipeTransform {
  transform(productId: number, products: Product[]): string {
    const product = products.find(product => product.id === productId);
    return product ? product.name : "";
  };
}
