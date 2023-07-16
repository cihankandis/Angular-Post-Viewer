import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Post } from '../../interfaces/post.interface';
import { getPosts, togglePostContent } from '../../store/posts.actions';
import { selectPosts } from '../../store/posts.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPosts);
  }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.store.dispatch(getPosts());
  }

  toggleContent(postId: number): void {
    this.store.dispatch(togglePostContent({ postId }));
  }

  trackPostById(index: number, post: any): number {
    return post.id;
  }
}
