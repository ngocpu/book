import { SingleBookComponent } from './single-book/single-book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';



@NgModule({
  declarations: [BooksComponent,SingleBookComponent],
  imports: [
    CommonModule
  ],
  providers: [BooksService],
  exports: [BooksComponent]
})
export class BooksModule { }
