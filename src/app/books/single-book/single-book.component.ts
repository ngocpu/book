import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
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
  isInCart:boolean = false;

=======
>>>>>>> 748c35d20d6ba0cdc901023af018fef5b6461175
  constructor(private cartService:CartService, private Router:Router,private AuthService:AuthService){}
  handelAdd(){
    // if(this.AuthService.isLogin===false){
    //   this.Router.navigate(['login'])
    // } else{
    //   this.isInCart =true
    //   this.cartService.add(this.book)
<<<<<<< HEAD
=======

>>>>>>> 748c35d20d6ba0cdc901023af018fef5b6461175
    //   this.listBooks.push(this.book)
    //   localStorage.setItem('book',JSON.stringify(this.listBooks))
    // }
    this.cartService.add(this.book)
    alert('add suscessfull')
  }
  ngOnInit(): void {
    
  }
<<<<<<< HEAD
}
=======
} 
>>>>>>> 748c35d20d6ba0cdc901023af018fef5b6461175
