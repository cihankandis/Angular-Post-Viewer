import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { PostsEffects } from './posts.effects';
import { getPosts, getPostsSuccess } from './posts.actions';
import { PostService } from '../post.service';

describe('PostsEffects', () => {
  let actions$: Observable<any>;
  let effects: PostsEffects;
  let postService: jasmine.SpyObj<PostService>;

  beforeEach(() => {
    const postServiceSpy = jasmine.createSpyObj('PostService', ['getPosts']);

    TestBed.configureTestingModule({
      providers: [
        PostsEffects,
        { provide: Actions, useFactory: () => actions$ },
        { provide: PostService, useValue: postServiceSpy },
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PostsEffects);
    postService = TestBed.inject(PostService) as jasmine.SpyObj<PostService>;
  });

  it('should dispatch getPostsSuccess action with posts', () => {
    const mockPosts = [
        { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
        { id: 2, title: 'Post 2', body: 'Body 2', userId: 2 }
    ];

    actions$ = of(getPosts());
    postService.getPosts.and.returnValue(of(mockPosts));

    effects.getPosts$.subscribe((action) => {
      expect(action).toEqual(getPostsSuccess({ posts: mockPosts }));
    });
  });
});
