import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[];
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = '';
  pageTitle = 'Product List';
  constructor(
    public _route: ActivatedRoute,
    public productsService: ProductsService) {
    console.log(this._route.snapshot.params['id']);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}

