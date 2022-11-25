import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService:AuthService){}
  canActivate(){
    return true
    ////////////////////////////////
  }
  
}
