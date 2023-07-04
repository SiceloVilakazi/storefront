import { Component,EventEmitter,Output} from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

    constructor(private cartService: CartService,private productService:ProductsService){}

    products:IProduct[] =[];
@Output() newItemEvent = new EventEmitter<IProduct>();


ngOnInit(){
  this.productService.getAllProducts().subscribe((data:IProduct[])=>{
    this.products=data;
  });
}

addToCart(product:IProduct[],item:IProduct){
  this.addNewItem(item);
  this.cartService.addToCart(product,5).subscribe();
}

addNewItem(cartItem: IProduct) {
  this.newItemEvent.emit(cartItem);
}
}
