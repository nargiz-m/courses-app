import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder, FormControl, FormGroup, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { nameValidator } from '../../utils/name-validator.directive';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  submitted = false;
  courseForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    newAuthor: this.fb.group({
      name: ['', nameValidator()]
    }),
    duration: ['', [Validators.required, Validators.min(0)]]
  });
  authors = new FormArray<FormControl<Partial<{ name: string | null; }> | null>>([]);

  get title(){ return this.courseForm.get('title') }
  get description(){ return this.courseForm.get('description') }
  get duration(){ return this.courseForm.get('duration') }
  get newAuthor(){ return this.courseForm.get('newAuthor') }
  get name(){ return this.courseForm.get('newAuthor.name') }

  onSubmit() {
    this.submitted = true;
  }

  addAuthor() {
    const author = this.newAuthor;
    if(author?.value && author.valid) {

      this.authors.push(new FormControl(author.value))
    };
  }
}
