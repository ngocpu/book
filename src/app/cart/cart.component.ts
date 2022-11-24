import { CartService } from './services/cart.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  isInCart:boolean = true
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    
  }
  getCart(){
    return this.cartService.get()
  }
}
