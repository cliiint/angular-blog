import { Component, OnInit, Inject } from '@angular/core';
import { PostService } from '../../service/post.service';
import { PostInterface } from '../../models/post-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  posts: PostInterface[] = [];

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.load();
  }

  createPost(): void {
    const dialogRe = this.dialog.open(PostFormComponent, {
      width: '512px',
      data: {
        post: null,
        formContext: 'Create'
      }
    })
  }

  editPost(post: PostInterface): void {
    const dialogRef = this.dialog.open(PostFormComponent, {
      width: '512px',
      data: {
        post: post,
        formContext: 'Update'
      }
    })
  }

}
