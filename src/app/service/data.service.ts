import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PostInterface } from '../models/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  data: PostInterface[] = [];

  constructor(private httpClient: HttpClient) {}

  initAppData(): void {
    this.httpClient.get<{ posts: PostInterface[] }>('http://localhost:4200/assets/blogData.json').subscribe({
      next: (res: { posts: PostInterface[] }) => this.data = res.posts,
      error: (err: HttpErrorResponse) => {
        console.error(`Unable to initialize app data: ${err.error}`)
      }
    })
  }

  load(): PostInterface[] {
    return this.data;
  }

  patch(post: PostInterface): void {
    
  }
}
