import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { effects, reducers } from './store';
import { AuthStateModule } from './store/auth/auth.module';
import { CoursesStateModule } from './store/courses/courses.module';
import { UserStateModule } from './store/user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    CoursesStateModule,
    UserStateModule,
    AuthStateModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
