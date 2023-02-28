import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './features/course/course.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';

const routes: Routes = [
  { path: '',   redirectTo: '/courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'registration', component: RegistrationComponent },
  { path: 'courses', component: CoursesComponent, },
  { path: 'courses/add', component: CourseComponent, },
  { path: 'courses/edit/:id', component: CourseComponent, },
  { path: 'courses/:id', component: CourseComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
