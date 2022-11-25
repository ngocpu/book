import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
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
<<<<<<< HEAD
  listBooks: Array<Book> =[]
=======
  isInCart:boolean = false;
>>>>>>> 04c701a9fde4efec87b84f6d85841a561e933ed0
  constructor(private cartService:CartService, private Router:Router,private AuthService:AuthService){}
  handelAdd(){
    // if(this.AuthService.isLogin===false){
    //   this.Router.navigate(['login'])
    // } else{
    //   this.isInCart =true
    //   this.cartService.add(this.book)
<<<<<<< HEAD
    //   this.listBooks.push(this.book)
    //   localStorage.setItem('book',JSON.stringify(this.listBooks))
    // }
    this.cartService.add(this.book)
    alert('add suscessfull')
=======
    // }
    this.isInCart =true
    this.cartService.add(this.book)
>>>>>>> 04c701a9fde4efec87b84f6d85841a561e933ed0
  }
  ngOnInit(): void {

  }
<<<<<<< HEAD
=======
  handelremoveAdd(){
    this.isInCart =false
    this.cartService.remove(this.book)
  }
>>>>>>> 04c701a9fde4efec87b84f6d85841a561e933ed0
} 
