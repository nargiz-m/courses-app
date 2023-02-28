import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'login', loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule), },
    { path: 'registration', loadChildren: () => import('./features/registration/registration.module').then((m) => m.RegistrationModule), },
    { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then((m) => m.CoursesModule), },
    { path: 'courses/add', loadChildren: () => import('./features/course/course.module').then((m) => m.CourseModule), },
    { path: 'courses/edit/:id', loadChildren: () => import('./features/course/course.module').then((m) => m.CourseModule), },
    { path: 'courses/:id', loadChildren: () => import('./features/course/course.module').then((m) => m.CourseModule), },
    { path: '', redirectTo: '/courses', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
