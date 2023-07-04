import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private productService:ProductsService){}

  ngOnInit(){

  }
  onAddtoCart(product:any){
    localStorage.setItem('cartItem', JSON.stringify(product));
    console.log(product)
  }
}
