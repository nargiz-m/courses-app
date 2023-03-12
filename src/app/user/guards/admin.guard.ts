import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userStoreService: UserStateFacade, private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.userStoreService.isAdmin$.pipe(map(data => {
      if(data) {
        return data;
      }
      return this.router.parseUrl('/courses');
    }))
  }
}
