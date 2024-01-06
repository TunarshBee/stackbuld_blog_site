// effects/blog.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as BlogActions from './post.action';
import { PostService } from '../app/services/post.service';

@Injectable()
export class BlogEffects {
  loadBlogPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadBlogPosts),
      mergeMap(() =>
        this.blogService.getPosts().pipe(
          map(posts => BlogActions.loadBlogPostsSuccess({ posts })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createBlogPost$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BlogActions.createBlogPost),
    mergeMap(({ post }) =>
      this.blogService.createPost(post).pipe(
        map(newPost => BlogActions.createBlogPost({ post: newPost })),
        catchError(error => of(BlogActions.BlogPostFailure({ error })))
      )
    )
  )
);

updateBlogPost$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BlogActions.updateBlogPost),
    mergeMap(({ post }) =>
      this.blogService.updatePost(post).pipe(
        map(updatedPost => BlogActions.updateBlogPost({ post: updatedPost })),
        catchError(error => of(BlogActions.BlogPostFailure({ error })))
      )
    )
  )
);

deleteBlogPost$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BlogActions.deleteBlogPost),
    mergeMap(({ postId }) =>
      this.blogService.deletePost(postId).pipe(
        map(() => BlogActions.deleteBlogPost({ postId })),
        catchError(error => of(BlogActions.BlogPostFailure({ error })))
      )
    )
  )
);

  constructor(private actions$: Actions, private blogService: PostService) {}
}
