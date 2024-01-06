import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post: any = {};

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id') as string;
    this.postService.getPostById(postId).subscribe(post => {
      this.post = post;
    });
  }
}
