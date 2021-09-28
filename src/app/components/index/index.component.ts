import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/data.service';
import { PostInterface } from '../../models/post-interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  posts: PostInterface[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.load();
  }

}
