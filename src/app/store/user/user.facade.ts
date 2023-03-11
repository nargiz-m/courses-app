import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UsersState } from './user.reducer';
import { requestGetUser, requestGetAuthor, requestAddAuthor } from './user.actions';
import { getName, getAuthor, getErrorMessage, isAdminSelector } from './user.selectors';

@Injectable()
export class UserStateFacade {
    isAdmin$ = this.store.pipe(select(isAdminSelector))
    name$ = this.store.pipe(select(getName))
    author$ = this.store.pipe(select(getAuthor))
    errorMessage$ =  this.store.pipe(select(getErrorMessage))

    getUser() {
        this.store.dispatch(requestGetUser());
    }
    
    getAuthor(id: string) {
        this.store.dispatch(requestGetAuthor({id}));
    }
    
    addAuthor(body: any) {
        this.store.dispatch(requestAddAuthor({ body }))
    }

    constructor(private store: Store<UsersState>) {}
}