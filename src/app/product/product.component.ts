import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  private products: IProduct[] = this.productService.getProducts();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  public getProducts(): IProduct[] {
    return this.products;
  }
}
