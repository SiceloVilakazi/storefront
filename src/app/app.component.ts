import { Component } from '@angular/core';
import { CategoriesService } from './Services/categories.service';
import { ProductsService } from './Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WolfStoreFront';
  categories!: any[];
  products!: any[];

  constructor(private categoryService: CategoriesService,private productService:ProductsService){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe((data:any[])=>{
      this.categories=data;
    });

    this.productService.getAllProducts().subscribe((data:any[])=>{
      this.products=data;
    });

  }
}
