import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.scss',
})
export class NewCourseForm {
  // create a new instance of FormGroup
  signUpForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
}
