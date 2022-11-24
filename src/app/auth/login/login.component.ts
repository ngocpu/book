import { AuthService } from './../auth.service';
import { LogiForm } from './../../types/auth';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthService:AuthService){}

  form: LogiForm ={
    email: '',
    password:''
  }
  submit(){
    this.AuthService.login(this.form)
  }
  isLoading(){
    return this.AuthService.isLoading
  }
  ngOnInit(): void {
  
  }
}
