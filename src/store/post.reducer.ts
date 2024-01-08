// reducers/blog.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './post.action';
import { BlogState, IPost } from './models/post.models';

export const initialState: BlogState = {
    posts: [],
    loading: false,
    error: null,
    currentPage: 0,
    total: 0,
    page: 0,
    limit: 0,
    currentPostId: ''
};

export const blogReducer = createReducer(
    initialState,
    on(BlogActions.loadBlogPostsSuccess, (oldState, { posts, state }) => ({
        ...oldState,
        posts: [...posts],
        loading: false,
        currentPage: state.currentPage,
        total: state.total,
        page: state.page,
        limit: state.limit,
    })),

    on(BlogActions.createBlogPost, (state) => ({ ...state, loading: true, error: null })),
    on(BlogActions.createBlogPostSuccess, (state, { post }) => ({
        ...state,
        posts: [...state.posts, post],
        loading: false,
    })),
    on(BlogActions.createBlogPostFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(BlogActions.updateBlogPost, (state) => ({ ...state, loading: true, error: null })),
    on(BlogActions.updateBlogPostSuccess, (state, { post }) => ({
        ...state,
        posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        loading: false,
    })),
    on(BlogActions.updateBlogPostFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(BlogActions.deleteBlogPost, (state) => ({ ...state, loading: true, error: null })),
    on(BlogActions.deleteBlogPostSuccess, (state, { postId }) => ({
        ...state,
        posts: state.posts.filter((p) => p.id !== postId),
        loading: false,
    })),

    on(BlogActions.loadComments, (state, { postId }) => ({ ...state, loading: true, currentPostId: postId })),
    on(BlogActions.loadCommentsSuccess, (state, { postId, comments }) => {
      if (state.currentPostId === postId) {
        return { ...state, comments, loading: false, error: null };
      }
      return state;
    }),
    on(BlogActions.loadCommentsFailure, (state, { error }) => ({ ...state, loading: false, error })),

    on(BlogActions.addCommentSuccess, (state, { postId, comment }) => {
        const updatedPosts = state.posts.map((post:any) => {
          if (post.id === postId) {
            return { ...post, comments: [...(post.comments || []), comment] };
          }
          return post;
        });
        return { ...state, posts: updatedPosts };
      }),
      on(BlogActions.addCommentFailure, (state, { error }) => ({ ...state, error })),
);
