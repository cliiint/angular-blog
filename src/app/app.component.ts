import { Component } from '@angular/core';
import { PostService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private postService: PostService) {
    this.postService.initAppData();
  }
}
