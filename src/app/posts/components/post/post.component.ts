import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() post!: Post;
  @Output() toggleContent = new EventEmitter<number>();

  onToggle(): void {
    this.toggleContent.emit(this.post.id);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onToggle();
    }
  }
  
  get postContentMode(): number {
    return this.post.contentMode || 0;
  }

  get postTitle(): string {
    switch (this.postContentMode) {
      case 0:
        return 'Title';
      case 1:
        return 'User id';
      case 2:
        return 'Post id';
      case 3:
        return 'Body';
      default:
        return '';
    }
  }

  get postContent(): string {
    switch (this.postContentMode) {
      case 0:
        return this.post.title;
      case 1:
        return this.post.userId.toString();
      case 2:
        return this.post.id.toString();
      case 3:
        return this.post.body;
      default:
        return '';
    }
  }
}