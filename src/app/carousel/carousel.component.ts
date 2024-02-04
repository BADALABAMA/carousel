import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  public slides: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.slides = this.productService.getUniqueImages();
  }
}
