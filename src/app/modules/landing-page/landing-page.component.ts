import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  posts: any[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(({data,page,limit}:any) => {
      this.posts = data;
      console.log(this.posts)
    });
  }
}
