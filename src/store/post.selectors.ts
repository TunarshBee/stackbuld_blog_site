import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogState, IPost } from "./models/post.models";

export const selectBlogState = createFeatureSelector<BlogState>('blog')

export const BlogPostsSelector = createSelector(selectBlogState, state => ({
  posts: state.posts,
  currentPage: state.currentPage,
  total : state.total,
  page : state.page,
  limit : state.limit,

}));


export const selectBlogLoading = createSelector(selectBlogState, (state: BlogState) => state.loading);
export const selectBlogError = createSelector(selectBlogState, (state: BlogState) => state.error);
export const selectFilteredBlogPosts = createSelector(
  BlogPostsSelector,
  (blogState:any, props: { searchTerm: string }) => {
    const searchTerm = props.searchTerm.toLowerCase();
    const filteredPosts = blogState.posts.filter((post:any) => post.text?.toLowerCase().includes(searchTerm));

    return {
      posts: filteredPosts,
      currentPage: blogState.currentPage,
    };
  }
);
export const selectBlogPage = createSelector(selectBlogState, state => state.currentPage);
export const selectCurrentPostId = (state: { blog: IPost }) => state.blog.id;
export const selectComments = createSelector(selectBlogState, state => state.posts.flatMap(post => post.comments || []));
