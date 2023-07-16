import { createAction, props } from '@ngrx/store';
import { Post } from '../interfaces/post.interface';

export const enum PostActionTypes {
  togglePostContent = '[Post] Toggle Content',
  getPosts = '[Post] Get Posts',
  getPostsSuccess = '[Post] Get Posts Success',
}

export const togglePostContent = createAction(
  PostActionTypes.togglePostContent,
  props<{ postId: number }>()
);

export const getPosts = createAction(PostActionTypes.getPosts);

export const getPostsSuccess = createAction(
  PostActionTypes.getPostsSuccess,
  props<{ posts: Post[] }>()
);
