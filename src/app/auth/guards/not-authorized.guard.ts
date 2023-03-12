import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthStateFacade } from 'src/app/store/auth/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  constructor( private authService: AuthStateFacade, private router: Router ) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthorized$.pipe(map((data) => {
      if(!data) {
        return !data
      }
      return this.router.parseUrl('/courses')
    }));
  }
  
}
