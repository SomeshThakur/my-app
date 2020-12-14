import { Injectable } from '@angular/core';

const KEY = 'userinfo';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(userName, password) {
    localStorage.setItem(KEY, JSON.stringify({ userName, password }));
    console.log('User logged in successfully!');
  }
  logout() {
    localStorage.removeItem(KEY);
  }
  isAuthenticated() {
    return !!localStorage.getItem(KEY);
  }
  getUserInfo() {
    return localStorage.getItem(KEY);
  }
}
