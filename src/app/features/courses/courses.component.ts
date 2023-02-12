import { Input, Component, Output } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  @Input() username: string = 'Harry Potter';
  
  @Input() courses: any[] = [];
  @Input() areEditable: boolean = false;
  @Output() action?: () => void;
}
