import { Injectable } from '@angular/core';
import { Router, UrlTree, CanMatch } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanMatch {
  constructor(private authService: AuthService, private router: Router) {}
  
  canMatch(): boolean | UrlTree {
    let load = false;
    this.authService.isAuthorized$.subscribe((data) => load = data as boolean);
    if(load) {
      return load;
    }
    return this.router.parseUrl('/login');;
  }
}
