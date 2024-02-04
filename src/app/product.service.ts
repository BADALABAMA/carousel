import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[] = [
    {
      category: 'burgers',
      title: ' burger',
      id: 1,
      price: 20,
      img: 'assets/burger.webp',
    },
    {
      category: 'burgers',
      title: ' burger',
      id: 2,
      price: 20,
      img: 'assets/burger.webp',
    },
    {
      category: 'burgers',
      title: ' burger',
      id: 3,
      price: 20,
      img: 'assets/burger.webp',
    },
    {
      category: 'burgers',
      title: ' burger',
      id: 4,
      price: 20,
      img: 'assets/burger.webp',
    },

    {
      category: 'pizzas',
      title: ' pizza',
      id: 5,
      price: 20,
      img: 'assets/pizza.jpeg',
    },
    {
      category: 'pizzas',
      title: ' pizza',
      id: 6,
      price: 20,
      img: 'assets/pizza.jpeg',
    },
    {
      category: 'pizzas',
      title: ' pizza',
      id: 7,
      price: 20,
      img: 'assets/pizza.jpeg',
    },
    {
      category: 'pizzas',
      title: ' pizza',
      id: 8,
      price: 20,
      img: 'assets/pizza.jpeg',
    },
    {
      category: 'shavermas',
      title: ' shaverma',
      id: 9,
      price: 20,
      img: 'assets/shawerma.avif',
    },
    {
      category: 'shavermas',
      title: ' shaverma',
      id: 10,
      price: 20,
      img: 'assets/shawerma.avif',
    },
    {
      category: 'shavermas',
      title: ' shaverma',
      id: 11,
      price: 20,
      img: 'assets/shawerma.avif',
    },
    {
      category: 'shavermas',
      title: ' shaverma',
      id: 12,
      price: 20,
      img: 'assets/shawerma.avif',
    },
  ];

  public getProducts(): IProduct[] {
    return this.products;
  }
  public getProductById(id: number): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  public getProductByCategory(category: string): IProduct[] {
    return this.products.filter((product) => product.category === category);
  }

  public getUniqueImages() {
    const uniqueImages: any = [];

    this.products.forEach((image) => {
      if (uniqueImages.indexOf(image.img) === -1) {
        uniqueImages.push(image);
      }
    });

    return uniqueImages;
  }

  public getProductCategories(): string[] {
    const categoriesSet = new Set<string>();

    this.products.forEach((product) => {
      if (product.category) {
        categoriesSet.add(product.category);
      }
    });

    return Array.from(categoriesSet);
  }

  public addNewProduct(newProduct: IProduct): void {
    console.log('PRODUCT ADD', newProduct);
    this.products.push(newProduct);
  }
  constructor() {}
}
