import { getPostsSuccess, togglePostContent } from './posts.actions';
import { Post } from '../interfaces/post.interface';
import { PostsState, initialState, postsReducer } from './posts.reducer';

    const post1: Post = { id: 1, title: 'Test Post 1', userId: 1, body: 'Test Body 1' };
    const post2: Post = { id: 2, title: 'Test Post 2', userId: 2, body: 'Test Body 2' };

describe('postsReducer', () => {
    it('should handle togglePostContent action correctly', () => {
        const state: PostsState = {
            posts: [post1, post2]
        };

        const postId = 2;
        const action = togglePostContent({ postId });
        const newState = postsReducer(state, action);

        expect(newState.posts.length).toBe(2);
        expect(newState.posts[0]).toBe(post1);

        const updatedPost = newState.posts[1];
        expect(updatedPost.contentMode).toBe((post2.contentMode || 0) + 1);
    });

    it('should handle getPostsSuccess correctly', () => {
        const mockPosts: Post[] = [
            { id: 1, title: 'Updated Post 1', body: 'Body 1', userId: 1},
            { id: 2, title: 'Updated Post 2', body: 'Body 2', userId: 2},
        ];
        const action = getPostsSuccess({ posts: mockPosts });
        const nextState = postsReducer(initialState, action);

        expect(nextState.posts).toEqual(mockPosts);
    });

    it('should return initial state for unknown action', () => {
        const unknownAction = { type: 'UNKNOWN_ACTION' };
        const nextState = postsReducer(initialState, unknownAction);

        expect(nextState).toBe(initialState);
    });
});
