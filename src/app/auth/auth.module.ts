import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResgiterComponent } from './resgiter/resgiter.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResgiterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
