// actions/blog.actions.ts
import { createAction, props } from '@ngrx/store';
import { IPost } from './models/post.models';

export const loadBlogPosts = createAction('[Blog] Load Posts');
export const loadBlogPostsSuccess = createAction('[Blog] Load Posts Success', props<{ posts:IPost[] }>());
export const createBlogPost = createAction('[Blog] Create Post', props<{ post:IPost }>());
export const updateBlogPost = createAction('[Blog] Update Post', props<{ post:IPost }>());
export const deleteBlogPost = createAction('[Blog] Delete Post', props<{ postId: string }>());
export const BlogPostFailure = createAction('[Blog] Post Fail', props<{error:any}>())