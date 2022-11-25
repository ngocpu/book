import { Book } from '../../types/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<Book>=[]
  newListBooks: Array<Book> =[]
  constructor() { }
  add(book:Book) {
    this.cart.push(book)
    this.newListBooks.push(book)
    localStorage.setItem('book',JSON.stringify(this.newListBooks))

  }
  get(){
    return this.cart
  }
  remove(book:Book) {
    this.cart.splice(this.cart.indexOf(book))
    this.removeBook()

<<<<<<< HEAD
=======
  }
  removeBook(){
    let upDateListBook:any = JSON.stringify(this.newListBooks)
    let x =JSON.parse(upDateListBook)
    let indexToRemove = 1
    x.splice(indexToRemove, 1)
    localStorage.setItem('updateBook',JSON.stringify(x))
    
>>>>>>> 04c701a9fde4efec87b84f6d85841a561e933ed0
  }
  removeBook(){
    let upDateListBook:any = JSON.stringify(this.newListBooks)
    let x =JSON.parse(upDateListBook)
    let indexToRemove = 1
    x.splice(indexToRemove, 1)
    localStorage.setItem('updateBook',JSON.stringify(x))
    
  }
}