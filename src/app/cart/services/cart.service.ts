import { Book } from '../../types/book';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/types/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Array<Book> = []
  newListBooks: Array<Cart>=[]
  constructor() {
    
   }
  add(book:Book) {
    // this.cart.push({
    //   id: book.id,
    //   author: book.author,
    //   img: book.img,
    //   name: book.name,
    //   price: book.price
    // })
    // console.log('book' + book.id);
    // this.newListBooks= this.newListBooks.filter(item=> {
    //   if (book.id === item.id){
    //     this.newListBooks.push({
    //       id: book.id,
    //       author: book.author,
    //       img: book.img,
    //       name: book.name,
    //       price: book.price,
    //       quannity: 2
    //     })   
    //   }else{
    //   }
    // })
    
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