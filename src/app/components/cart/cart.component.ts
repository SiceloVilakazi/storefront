import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

cartItems!:IProduct;
constructor(private cartService:CartService){}

  ngOnInit(){
 this.cartItems = (JSON.parse(localStorage.getItem('cartItem')|| ''));
 console.log(this.cartItems);
  }
  
}
