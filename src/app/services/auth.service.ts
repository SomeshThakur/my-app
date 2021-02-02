import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { BASE } from './utils';

export const KEY = 'token';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username, password) {
    return this.http.post(`${BASE}/auth/login`, { login: username, password });
  }

  logout() {
    localStorage.removeItem(KEY);
  }

  getToken(): string {
    return localStorage.getItem(KEY);
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}
