import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthorized$.pipe(map((data) => {
      if(!data) {
        return !data
      }
      return this.router.parseUrl('/courses')
    }));
  }
  
}
