import { Cart } from './../../types/cart';
import { Book } from '../../types/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<Book>=[]
  newListBooks: Array<Cart> =[]
  constructor() { }
  add(book:Book) {
    this.cart.push(book)
    this.newListBooks.push({
      id: book.id,
      author: book.author,
      img: book.img,
      name: book.name,
      price: book.price,
      quannity: 1
    })  
    localStorage.setItem('book',JSON.stringify(this.newListBooks))
  }
 
  get(){
    return this.cart
  }
  remove(book:Book) {
    this.cart.splice(this.cart.indexOf(book),1)
    this.removeBook()
  }
  removeBook(){
    let upDateListBook:any = JSON.stringify(this.newListBooks)
    let x =JSON.parse(upDateListBook)
    let indexToRemove = 1
    x.splice(indexToRemove, 1)
    localStorage.setItem('updateBook',JSON.stringify(x))
    
  }
}