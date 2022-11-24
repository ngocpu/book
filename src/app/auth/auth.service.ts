import { Router, Routes } from '@angular/router';
import { LogiForm, ResForm } from './../types/auth';
import { Injectable, Input } from '@angular/core';
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false
  isLoading:boolean = false
  passwordMatch:boolean = true
  isLogin:boolean=false
  constructor(private router:Router) { }
  login(form:LogiForm){
    if(this.isLoading) return 
    this.isLoading=true
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.isAuthenticated= true,
        this.isLogin=true
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false
      })
      .finally(() =>{
        this.isLoading = false;
      })
  }
  resgiter(form:ResForm){
    if(this.isLoading) return;
    this.isLoading = true;
    if(form.password !== form.confirm_password){
      this.passwordMatch = false
    }
    const auth =getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential)
        this.isAuthenticated=true
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
      })
      .finally(()=> {
        this.isLoading=false
      })
  }
  logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthenticated = false
      this.isLogin=false
    }).catch((error) => {

    })
  }
}
