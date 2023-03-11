import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthStateFacade } from './auth.facade';
import { AuthEffects } from './auth.effects';
import { authReducer, initialState } from './auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer, {
      initialState
    }),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [AuthStateFacade]
})
export class AuthStateModule {}
