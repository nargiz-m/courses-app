import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';

type Response = {
  result: any[],
  successful: boolean
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses?: any[];
  constructor(private httpClient: HttpClient, private sessionService: SessionStorageService) { }

  getAll(): Observable<any> {
    return this.httpClient.get<Response>('http://localhost:4000/courses/all');
  }

  searchCourses(searchTerm: string): Observable<any> {
    return this.httpClient.get<Response>(`http://localhost:4000/courses/filter?title=${searchTerm}`);
  }

  createCourse(courseInfo: any){
    this.httpClient.post<Response>('http://localhost:4000/courses/add', courseInfo, {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    }).subscribe();
  }

  editCourse(id: string, courseInfo: any){
    this.httpClient.put<Response>(`http://localhost:4000/courses/${id}`, courseInfo, {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    }).subscribe()
  }
  
  getCourse(id: string): Observable<any> {
    return this.httpClient.get<Response>(`http://localhost:4000/courses/${id}`);
  }

  deleteCourse(id: string){
    this.httpClient.delete<Response>(`http://localhost:4000/courses/${id}`, {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    }).subscribe();
  }
}
