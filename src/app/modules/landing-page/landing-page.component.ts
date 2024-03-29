import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBlogPosts } from '../../../store/post.action';
import { BlogPostsSelector, selectBlogError, selectBlogLoading, selectBlogPage, selectFilteredBlogPosts } from '../../../store/post.selectors';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { LoaderComponent } from '../../shared/loader/loader.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoaderComponent, FormsModule, CommonModule, MatCardModule, PaginationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  posts!: any;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  currentPage!: number;
  totalPages!: number;
  searchTerm!: string;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadBlogPosts({page:0}));
    this.store.select(BlogPostsSelector).subscribe(data => {

      this.posts = data.posts ;
      if (data.posts.length === 0) {
        this.currentPage = 1;
        this.totalPages = 1;
      } else {
        this.currentPage = data.currentPage;
        this.totalPages = Math.ceil(data.total / data.limit);
      }
    });
// getting the loading and the error state
    this.loading$ = this.store.select(selectBlogLoading);
    this.error$ = this.store.select(selectBlogError);
  }
//  getting the currentPage number
  onPageChange(page: number) {
    this.currentPage = page ;
    this.loadPosts();
  }

  // loading the available post
  private loadPosts() {
    this.store.dispatch(loadBlogPosts({ page: this.currentPage }));
    this.posts = this.store.select(BlogPostsSelector);
    this.loading$ = this.store.select(selectBlogLoading);
    this.error$ = this.store.select(selectBlogError);
  }

  // function to search for the post with the search term
  search() {
    this.store.select(selectFilteredBlogPosts, { searchTerm: this.searchTerm }).subscribe(
      data=> this.posts = data.posts
    )
  }
}