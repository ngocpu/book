import { CartService } from '../../cart/services/cart.service';
import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Book } from '../../types/book';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  @Input() book:Book ={} as Book;
  isInCart:boolean = false;
  constructor(private cartService:CartService){}
  handelAdd(){
    this.isInCart =true
    this.cartService.add(this.book)
    localStorage.setItem('book',JSON.stringify(this.book))
  }
  ngOnInit(): void {

  }
  handelremoveAdd(){
    this.isInCart =false
    this.cartService.remove(this.book)
    localStorage.removeItem('book')
  }
} 
