import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPosts } from './posts.selectors';
import { PostsState } from './posts.reducer';

const mockPostsState: PostsState = {
    posts: [
      { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
      { id: 2, title: 'Post 2', body: 'Body 2', userId: 2 }
    ]
};

describe('Posts Selectors', () => {
  it('should select the posts from the state', () => {
    const selectedPosts = selectPosts.projector(mockPostsState);
    expect(selectedPosts).toEqual(mockPostsState.posts);
  });

  it('should select the posts from the state', () => {
    const selectPostState = createFeatureSelector<PostsState>('posts');
    const selectPosts = createSelector(
      selectPostState,
      (state: PostsState) => state.posts
    );

    const selectedPosts = selectPosts.projector(mockPostsState);
    expect(selectedPosts).toEqual(mockPostsState.posts);
  });
});
