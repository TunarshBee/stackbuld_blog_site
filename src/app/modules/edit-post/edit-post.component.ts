import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
  // post: any = { title: '', content: '' };
  editPostForm = new FormGroup({
    title: new FormControl(""),
    content: new FormControl("")
  })

  constructor(private postService: PostService, private router: Router) {}

  savePost() {
    const {content, title} = this.editPostForm.value
    this.postService.createPost({content,title}).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
