import { Component } from '@angular/core';
import { CategoriesService } from './Services/categories.service';
import { ProductsService } from './Services/products.service';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WolfStoreFront';
  categories!: any[];
  products!: any[];

  constructor(private categoryService: CategoriesService,
    private productService:ProductsService,
    private cartService:CartService ){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe((data:any[])=>{
      this.categories=data;
    });

    this.productService.getAllProducts().subscribe((data:any[])=>{
      this.products=data;
    });
  }

  addToCart(product:any){
    this.cartService.addToCart(product).subscribe();
  }
}
