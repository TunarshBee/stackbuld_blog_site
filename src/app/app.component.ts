import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { selectBlogLoading } from '../store/post.selectors';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'stackbuid_blog_site';
  isLoading: boolean = false
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.select(selectBlogLoading).subscribe(loading => this.isLoading = loading)
  }
}
