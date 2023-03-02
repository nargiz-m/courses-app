import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor( private window: Window ) {}

  setToken( token: string ) {
    this.window.sessionStorage.setItem('token', token)
  }

  getToken(): string {
    return this.window.sessionStorage.getItem('token') || '';
  }

  deleteToken(){
    this.window.sessionStorage.removeItem('token')
  }
}
