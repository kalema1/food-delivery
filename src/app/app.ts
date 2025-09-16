import { Component } from '@angular/core';
import { Like } from './like/like';
import { NewCourseForm } from './new-course-form/new-course-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NewCourseForm],
})
export class App {
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  };
}
