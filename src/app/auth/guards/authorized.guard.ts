import { Injectable } from '@angular/core';
import { Router, UrlTree, CanMatch } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanMatch {
  constructor(private authService: AuthService, private router: Router) {}
  
  canMatch(): Observable<boolean | UrlTree> {
    return this.authService.isAuthorized$.pipe(map((data) => {
      if(data) {
        return data;
      }
      return this.router.parseUrl('/login');
    }));
  }
}
