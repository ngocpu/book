import { Book } from '../../types/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<Book>=[]
  constructor() { }
  add(book:Book) {
    this.cart.push(book)
  }
  get(){
    return this.cart
  }
  remove(book:Book) {
    this.cart.splice(this.cart.indexOf(book))
  }
}
