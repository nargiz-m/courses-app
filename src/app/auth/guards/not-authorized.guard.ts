import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router ) {}
  canActivate(): boolean | UrlTree {
    let load = true;
    this.authService.isAuthorized$.subscribe((data) => load = !data as boolean);
    if(load) {
      return load
    }
    return this.router.parseUrl('/courses')
  }
  
}
