import { Component } from '@angular/core';
import { Like } from './like/like';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Like],
})
export class App {
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  };
}
