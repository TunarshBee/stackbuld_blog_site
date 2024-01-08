import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPost } from '../../../store/models/post.models';
import { Store } from '@ngrx/store';
import { updateBlogPost } from '../../../store/post.action';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatButtonModule, MatInputModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent implements OnInit {
  postId!: string;
  post!: IPost;
  isLoading!: boolean

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
    this.postId = this.route.snapshot.paramMap.get('id') as string;
    this.loadPost();
   }

  ngOnInit() {
    
  }

  editForm = new FormGroup({
    text: new FormControl("", Validators.required),
    likes: new FormControl("", Validators.required),
    tags: new FormControl("", Validators.required)
  })

  loadPost() {
    this.postService.getPostById(this.postId).subscribe((post: IPost) => {
      this.post = post;
      let tags = ""
      post.tags?.forEach(element => {
        tags += element
      });
      this.editForm.setValue({
        likes: post.likes as string,
        tags: tags,
        text: post.text as string
      })
    });

  }

  savePost() {
    const { likes, tags, text } = this.editForm.value
    let tagArray = tags?.split(" ")
    this.store.dispatch(updateBlogPost({ post: { id: this.postId, likes: likes as string, tags: tagArray, text: text as string } }))
    this.router.navigate(['/post', this.postId]);
  }
}
