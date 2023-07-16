import { createReducer, on } from '@ngrx/store';
import { getPostsSuccess, togglePostContent } from './posts.actions';
import { Post } from '../interfaces/post.interface';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(togglePostContent, (state, { postId }) => {
    const updatedPosts = state.posts.map(post => {
      if (post.id === postId) {
        const newContentMode = ((post.contentMode || 0) + 1) % 4;
        return { ...post, contentMode: newContentMode };
      }
      return post;
    });

    return { ...state, posts: updatedPosts };
  }),

  on(getPostsSuccess, (state, { posts }) => {
    return { ...state, posts };
  })
);
