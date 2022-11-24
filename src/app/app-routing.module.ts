import { AuthGuard } from './auth/auth.guard';
import { ResgiterComponent } from './auth/resgiter/resgiter.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',component: BooksComponent},
  {path: 'cart',component:CartComponent, canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'resgiter',component:ResgiterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
