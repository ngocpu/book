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
  listItems:Array<Book> = [];
  value:number = 1;
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    
  }
  getCart(){
    this.listItems= this.cartService.get()
    return this.listItems
  }
  handelremove(){
    this.listItems.map(listItem => {
      this.cartService.remove(listItem)
    })
  }
  incress(){

  }

  decress(){
    
  }
}
