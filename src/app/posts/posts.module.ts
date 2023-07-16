import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostService } from './post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { PostsEffects } from './store/posts.effects';
import { postsReducer } from './store/posts.reducer';

@NgModule({
  declarations: [PostComponent, PostListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostsModule {}
