import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private name$$ = new BehaviorSubject<string>('');
  private isAdmin$$ = new BehaviorSubject<boolean>(false);
  
  public name$ = this.name$$.asObservable();
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) { }

  getUser() {
    this.userService.getUser().subscribe((data) => {
      this.name$$.next(data.result.name)
      this.isAdmin$$.next(data.result.role === 'admin')
    })
  }

  getAuthor(id: string): Observable<any> {
    return this.userService.getAuthor(id);
  }

  addAuthor(author: string): Observable<any> {
    return this.userService.addAuthor(author);
  }
}
