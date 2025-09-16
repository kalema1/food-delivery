import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  imports: [],
  templateUrl: './like.html',
  styleUrl: './like.scss',
})
export class Like {
  @Input('likesCount') likesCount!: number;
  @Input('isActive') isActive!: boolean;

  onClick() {
    this.likesCount += this.isActive ? -1 : 1;

    this.isActive = !this.isActive;
  }
}
