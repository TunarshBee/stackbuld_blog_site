// effects/blog.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError, tap, withLatestFrom } from 'rxjs/operators';
import * as BlogActions from './post.action';
import { PostService } from '../app/services/post.service';
import { Store } from '@ngrx/store';
import { BlogPostsSelector, selectBlogPage } from './post.selectors';

@Injectable()
export class BlogEffects {
  limit!: number
  total!: number
  page!: number
  loadBlogPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadBlogPosts),
      mergeMap(({ page }) =>
        this.blogService.getPosts(page).pipe(
          map((posts: any) => BlogActions.loadBlogPostsSuccess({ posts: posts.data, state: { currentPage: posts.page, limit: posts.limit, total: posts.total } })),
          catchError(error => of(BlogActions.loadBlogPostsFailure({ error })))
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
          catchError(error => of(BlogActions.createBlogPostFailure({ error })))
        )
      )
    )
  );

  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.addComment),
      mergeMap(({ postId, comment }) =>
        this.blogService.addComment(comment).pipe(
          map(newComment => BlogActions.addCommentSuccess({ postId, comment: newComment })),
          catchError(error => of(BlogActions.addCommentFailure({ error })))
        )
      )
    )
  );
  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadComments),
      mergeMap(({ postId }) =>
        this.blogService.getComments(postId).pipe(
          map(comments => BlogActions.loadCommentsSuccess({ postId, comments })),
          catchError(error => of(BlogActions.loadCommentsFailure({ error })))
        )
      )
    )
  );

  updateBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.updateBlogPost),
      mergeMap(({ post }) =>
        this.blogService.updatePost(post?.id as string, post).pipe(
          map(updatedPost => BlogActions.updateBlogPost({ post: updatedPost })),
          catchError(error => of(BlogActions.updateBlogPostFailure({ error })))
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
          catchError(error => of(BlogActions.deleteBlogPostFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private blogService: PostService, private store: Store) { }
}
