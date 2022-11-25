import { Book } from './../types/book';
import { CartService } from './services/cart.service';
import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  @Input() book:Book ={} as Book;
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    
  }
  getCart(){
    return this.cartService.get()
  }
  handelremove(){
    this.cartService.remove(this.book)
  }
}
