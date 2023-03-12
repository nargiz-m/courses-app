import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import { requestLogin, requestRegister, requestLogout } from './auth.actions';
import { isAuthorizedSelector, getErrorMessage } from './auth.selectors';

@Injectable()
export class AuthStateFacade {
    isAuthorized$ = this.store.pipe(select(isAuthorizedSelector))
    errorMessage$ =  this.store.pipe(select(getErrorMessage))

    login(body: any) {
        this.store.dispatch(requestLogin({body}));
    }
    
    register(body: any) {
        this.store.dispatch(requestRegister({body}));
    }
    
    logout() {
        this.store.dispatch(requestLogout())
    }

    constructor(private store: Store<AuthState>) {}
}