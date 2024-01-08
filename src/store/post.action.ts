// actions/blog.actions.ts
import { createAction, props } from '@ngrx/store';
import { Comment, IPost } from './models/post.models';

export const loadBlogPosts = createAction('[Blog] Load Posts', props<{ page?: number }>());
export const loadBlogPostsSuccess = createAction('[Blog] Load Posts Success', props<{ posts: IPost[], state: any }>());
export const loadBlogPostsFailure = createAction('[Blog] Load Posts Failure', props<{ error: string }>());

export const createBlogPost = createAction('[Blog] Create Post', props<{ post: any }>());
export const createBlogPostSuccess = createAction('[Blog] Create Post Success', props<{ post: IPost }>());
export const createBlogPostFailure = createAction('[Blog] Create Post Failure', props<{ error: string }>());

export const loadComments = createAction('[Blog] Load Comments', props<{ postId: string }>());
export const loadCommentsSuccess = createAction('[Blog] Load Comments Success', props<{ postId: string, comments: any }>());
export const loadCommentsFailure = createAction('[Blog] Load Comments Failure', props<{ error: string }>());

export const addComment = createAction('[Blog] Add Comment', props<{ postId: string, comment: Comment }>());
export const addCommentSuccess = createAction('[Blog] Add Comment Success', props<{ postId: string, comment: Comment }>());
export const addCommentFailure = createAction('[Blog] Add Comment Failure', props<{ error: string }>());

export const updateBlogPost = createAction('[Blog] Update Post', props<{post: IPost }>());
export const updateBlogPostSuccess = createAction('[Blog] Update Post Success', props<{ post: IPost }>());
export const updateBlogPostFailure = createAction('[Blog] Update Post Failure', props<{ error: string }>());

export const deleteBlogPost = createAction('[Blog] Delete Post', props<{ postId: string }>());
export const deleteBlogPostSuccess = createAction('[Blog] Delete Post Success', props<{ postId: string }>());
export const deleteBlogPostFailure = createAction('[Blog] Delete Post Failure', props<{ error: string }>());

