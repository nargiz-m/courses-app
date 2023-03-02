import { Input, Component, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { mockedCourseList } from 'src/mockCourseList';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() username?: string;
  
  @Input() courses: any[] = mockedCourseList;
  @Input() areEditable: boolean = true;
  @Output() action?: () => void;

  showModal: boolean = false;

  constructor(private authService: AuthService){}

  openModal(open: boolean) {
    this.showModal = open;
  }

  print(result: string) {
    if(result) {
      console.log(result)
    }
    this.openModal(false)
  }

  logout() {
    this.authService.logout();
  }
}
