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
<<<<<<< HEAD
  listItems:Array<Book> = [];
  value:number = 1;
=======
  listItems:Array<Book> =[]
  value:number =1
>>>>>>> 748c35d20d6ba0cdc901023af018fef5b6461175
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    this.getCart()

    
  }
  getCart(){
<<<<<<< HEAD
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
    
=======
    this.listItems = this.cartService.get()
    return this.listItems
  }
  handelremove(){
    this.listItems.map((listItem,index) =>{
        this.cartService.remove(listItem)
    })
  }
  inc(event:any){
    console.log(event);
    
    this.listItems.map((listItem,i) =>{
      if(this.listItems.indexOf(listItem)==i){
        this.value +=1
      }
    })
  }
  dec(){

>>>>>>> 748c35d20d6ba0cdc901023af018fef5b6461175
  }
}

