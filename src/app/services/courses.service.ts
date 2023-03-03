import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type Response = {
  result: any[],
  successful: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private httpClient: HttpClient) { }

  getAll(): any[] {
    let courses: any[] = [];
    this.httpClient.get<Response>('http://localhost:4000/courses/all').subscribe(data => courses = data.result);
    return courses;
  }

  searchCourses(searchTerm: string): any[] {
    let courses: any[] = [];
    this.httpClient.get<Response>(`http://localhost:4000/courses/filter?title=${searchTerm}`).subscribe(data => courses = data.result);
    return courses;
  }

  createCourse(courseInfo: any){
    this.httpClient.post<Response>('http://localhost:4000/courses/add', JSON.stringify(courseInfo)).subscribe();
  }

  editCourse(id: string, courseInfo: any){
    this.httpClient.put<Response>(`http://localhost:4000/courses/${id}`, JSON.stringify(courseInfo)).subscribe()
  }
  
  getCourse(id: string): any {
    let course: any;
    this.httpClient.get<Response>(`http://localhost:4000/courses/${id}`).subscribe(data => data.successful ? course = data.result : console.log(data.result));
    return course;
  }

  deleteCourse(id: string){
    this.httpClient.delete<Response>(`http://localhost:4000/courses/${id}`).subscribe();
  }
}
