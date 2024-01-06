// reducers/blog.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './post.action';
import { IPost } from './models/post.models';

export const initialState: IPost[] = [];

export const blogReducer = createReducer(
  initialState,
  on(BlogActions.loadBlogPostsSuccess, (state, { posts }) => [...posts]),
  on(BlogActions.createBlogPost, (state, { post }) => [...state, post]),
  on(BlogActions.updateBlogPost, (state, { post }) => state.map(p => (p.id === post.id ? post : p))),
  on(BlogActions.deleteBlogPost, (state, { postId }) => state.filter(p => p.id !== postId))
);
