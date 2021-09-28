import { Component, OnInit, Inject } from '@angular/core';
import { PostService } from '../../service/data.service';
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

  editPost(post: PostInterface): void {
    const dialogRef = this.dialog.open(PostFormComponent, {
      width: '300px',
      data: {
        post: post,
        formContext: 'Update'
      }
    })
  }

}
