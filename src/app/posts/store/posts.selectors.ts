import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from './posts.reducer';

export const selectPostState = createFeatureSelector<PostsState>('posts');

export const selectPosts = createSelector(
  selectPostState,
  (state: PostsState) => state.posts
);