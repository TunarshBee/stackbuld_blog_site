import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BlogState } from '../../../store/models/post.models';
import { addComment } from '../../../store/post.action';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.scss'
})
export class CommentFormComponent {
  @Input() postId!: any;
  commentForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<BlogState>) {
    this.commentForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      
      // using an hard-coded user because there is no authorization implemented
      const comment = { post: this.postId, message: this.commentForm.value.message, owner:'60d0fe4f5311236168a109ce' }; // Assuming id is set on the server
      this.store.dispatch(addComment({ postId: this.postId, comment }));
      this.commentForm.reset();
    }
  }


}
