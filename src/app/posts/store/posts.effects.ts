import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { getPosts, getPostsSuccess } from './posts.actions';
import { PostService } from '../post.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPosts),
      mergeMap(() =>
        this.postService.getPosts()
      ),
      map(posts => getPostsSuccess({ posts }))
    )
  );
}
