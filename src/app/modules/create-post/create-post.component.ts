import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { createBlogPost } from '../../../store/post.action';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) { }
  postForm = this.formBuilder.group({
    text: ['', [Validators.required, Validators.maxLength(50)]],
    tags: [''],
    image: [''],
    likes: [0],
    comments: [[]],
    owner: ['60d0fe4f5311236168a109ce'], //don't have a user since there's not login functionality
  });

  // {
  //   text: string(length: 6-50, preview only)
  //   image: string(url)
  //   likes: number(init value: 0)
  //   tags: array(string)
  //   owner: string(User id)
  //   }

  savePost() {
    const { image, tags, likes, owner, text } = this.postForm.value;
    let tag = tags?.split(" ")

    this.store.dispatch(createBlogPost({ post: { image: image, likes: likes, owner: owner, publishDate: Date.now(), tags: tag, text: text } }))
    this.router.navigate(['/']);
  }


}
