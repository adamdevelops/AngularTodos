import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged_in: boolean = true;

  constructor() { }

  isLoggedIn(){
    return this.logged_in;
  }
}
