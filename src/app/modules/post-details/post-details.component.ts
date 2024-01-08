import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { IPost } from '../../../store/models/post.models';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { deleteBlogPost, loadComments } from '../../../store/post.action';
import { CommentFormComponent } from '../../shared/comment-form/comment-form.component';
import { selectBlogLoading } from '../../../store/post.selectors';
import { Observable } from 'rxjs';
import { LoaderComponent } from '../../shared/loader/loader.component';


@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, LoaderComponent, RouterLink, CommentFormComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  post!: IPost
  postId!: string
  comments!: Array<any>
  loading$!: Observable<any>

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router, private store: Store) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id') as string;
  
    this.postService.getPostById(this.postId).subscribe(post => {
      this.post = post;
    });

    this.postService.getComments(this.postId).subscribe(resp => {
      this.comments = resp.data
    })
    this.loading$ = this.store.select(selectBlogLoading);
  }


  // the delete function
  onDelete() {
    // a matdialog, bootstrap modal or any pop-up modal can also be used for the delete confirmation
    if (confirm("Are you sure you want to delete this post")) {
      this.store.dispatch(deleteBlogPost({ postId: this.postId }))
      this.router.navigate(["/"])
    }
  }
}
