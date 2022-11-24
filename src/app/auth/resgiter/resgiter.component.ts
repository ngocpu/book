import { AuthService } from './../auth.service';
import {  ResForm } from './../../types/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgiter',
  templateUrl: './resgiter.component.html',
  styleUrls: ['./resgiter.component.css']
})
export class ResgiterComponent implements OnInit{
  constructor(private AuthService:AuthService){}
  form: ResForm={
    email:'',
    password:'',
    confirm_password:''
  }
  submitRes(){
    this.AuthService.resgiter(this.form)
  }
  isLoading(){
    return this.AuthService.isLoading
  }
  ngOnInit(): void {
    
  }
}
