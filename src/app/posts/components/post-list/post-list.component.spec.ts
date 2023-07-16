import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostListComponent } from './post-list.component';
import { Post } from '../../interfaces/post.interface';
import { getPosts, togglePostContent } from '../../store/posts.actions';
import { selectPosts } from '../../store/posts.selectors';
import { of } from 'rxjs';

const mockPosts: Post[] = [
  { id: 1, title: 'Post 1', body: 'Body 1', userId: 1},
  { id: 2, title: 'Post 2', body: 'Body 2', userId: 2},
];

@Component({ selector: 'app-post', template: '' })
class PostStubComponent {
  @Input() post!: Post;
  @Output() toggleContent = new EventEmitter<number>();
}

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListComponent, PostStubComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore()]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    store.overrideSelector(selectPosts, mockPosts);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch posts on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(getPosts());
  });

  it('should render posts', () => {
    const compiled = fixture.nativeElement;
    const gridItems = compiled.querySelectorAll('app-post');
    expect(gridItems.length).toBe(2);
  });

  it('should dispatch togglePostContent action when toggleContent is called', () => {
    const postId = 1;
    const togglePostContentSpy = spyOn(store, 'dispatch');
    component.toggleContent(postId);
    expect(togglePostContentSpy).toHaveBeenCalledWith(togglePostContent({ postId }));
  });

  it('should render app-post components', () => {
    const posts: Post[] = [
      { id: 1, title: 'Test Post 1', userId: 1, body: 'Test Body 1' },
      { id: 2, title: 'Test Post 2', userId: 2, body: 'Test Body 2' },
    ];
    component.posts$ = of(posts);
    fixture.detectChanges();

    const appPostElements = fixture.nativeElement.querySelectorAll('app-post');
    expect(appPostElements.length).toBe(posts.length);
  });
});
