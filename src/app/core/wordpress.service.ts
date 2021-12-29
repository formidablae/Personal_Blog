import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../post.model';


const POSTS_URL = 'posts';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  posts: IPost[];
  post$: Subject<IPost> = new Subject();


  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    if (this.posts) {
      return of(this.posts);
    }
    return this.http.get<IPost[]>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}`)
    .pipe(
      tap((posts) => this.posts = posts as IPost[])
    )
  }

  getPost(postId: number): void {
    if (this.posts) {
      const post = this.posts.find(p => p.id === postId);
      if (post) {
        this.post$.next(post);
      }
    }

    this.http.get<IPost>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}/${postId}`).subscribe(post => this.post$.next(post));
  }
}
