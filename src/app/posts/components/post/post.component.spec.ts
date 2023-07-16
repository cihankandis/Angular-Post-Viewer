import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Post } from 'src/app/posts/interfaces/post.interface';
import { By } from '@angular/platform-browser';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should emit toggleContent event when onToggle is called', () => {
    const post: Post = { id: 1, title: 'Test Post', userId: 1, body: 'Test Body' };
    component.post = post;

    const spy = spyOn(component.toggleContent, 'emit');
    component.onToggle();

    expect(spy).toHaveBeenCalledWith(post.id);
  });

  it('should emit toggleContent event when Enter key is pressed', () => {
    const post: Post = { id: 1, title: 'Test Post', userId: 1, body: 'Test Body' };
    component.post = post;

    const spy = spyOn(component.toggleContent, 'emit');
    const divElement = fixture.debugElement.query(By.css('.post')).nativeElement;
    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    divElement.dispatchEvent(keyboardEvent);

    expect(spy).toHaveBeenCalledWith(post.id);
  });

  it('should return default postContentMode when post.contentMode is not set', () => {
    const post: Post = { id: 1, title: 'Test Post', userId: 1, body: 'Test Body' };
    component.post = post;

    const postContentMode = component.postContentMode;

    expect(postContentMode).toBe(0);
  });

  it('should return correct postTitle based on postContentMode', () => {
    const post: Post = { id: 1, title: 'Test Post', userId: 1, body: 'Test Body' };
    component.post = post;

    let postTitle = component.postTitle;
    expect(postTitle).toBe('Title');

    post.contentMode = 1;
    postTitle = component.postTitle;
    expect(postTitle).toBe('User id');

    post.contentMode = 2;
    postTitle = component.postTitle;
    expect(postTitle).toBe('Post id');

    post.contentMode = 3;
    postTitle = component.postTitle;
    expect(postTitle).toBe('Body');

    post.contentMode = -1; // invalid value
    postTitle = component.postTitle;
    expect(postTitle).toBe('');
  });

  it('should return correct postContent based on postContentMode', () => {
    const post: Post = { id: 1, title: 'Test Post', userId: 1, body: 'Test Body' };
    component.post = post;

    let postContent = component.postContent;
    expect(postContent).toBe(post.title);

    post.contentMode = 1;
    postContent = component.postContent;
    expect(postContent).toBe(post.userId.toString());

    post.contentMode = 2;
    postContent = component.postContent;
    expect(postContent).toBe(post.id.toString());

    post.contentMode = 3;
    postContent = component.postContent;
    expect(postContent).toBe(post.body);

    post.contentMode = -1; // invalid value
    postContent = component.postContent;
    expect(postContent).toBe('');
  });
});
