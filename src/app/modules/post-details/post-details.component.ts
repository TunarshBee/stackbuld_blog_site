import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { IPost } from '../../../store/models/post.models';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { deleteBlogPost } from '../../../store/post.action';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post!: IPost
  postId!: string

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router, private store: Store) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id') as string;
    this.postService.getPostById(this.postId).subscribe(post => {
      this.post = post;
    });
  }

  onDelete() {
    if (confirm("Are you sure you want to delete this post")) {
      this.store.dispatch(deleteBlogPost({ postId: this.postId }))
      this.router.navigate(["/"])
    }
  }
}
