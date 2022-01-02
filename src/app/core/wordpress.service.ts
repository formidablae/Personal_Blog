import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPost } from '../post.model';


const POSTS_URL = '?rest_route=/wp/v2/posts';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  posts!: IPost[];
  post$: Subject<IPost> = new Subject();


  constructor(private http: HttpClient) {
    // console.log("WordpressService constructor executed");
  }

  getPosts(): Observable<IPost[]> {
    // console.log("WordpressService getPosts executed");
    if (this.posts) {
      // console.log("WordpressService getPosts posts already present");
      return of(this.posts);
    }
    // else {
    //   console.log("WordpressService getPosts posts not already present");
    // }
    return this.http.get<IPost[]>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}`)
      .pipe(
        tap((posts) => {
          // console.log("WordpressService getPosts get and set posts to posts obtained from url");
          this.posts = posts as IPost[]
        })
      )
  }

  getPost(postId: number): void {
    // console.log("WordpressService getPost executed, looking for post with id: " + postId);
    if (this.posts) {
      const post = this.posts.find(p => p.id === postId);
      if (post) {
        // console.log("WordpressService getPost new post obtained");
        this.post$.next(post);
      }
      // else {
      //   console.log("WordpressService getPost no new post obtained");
      // }
    }

    this.http.get<IPost>(`${environment.WORDPRESS_REST_URL}${POSTS_URL}/${postId}`).subscribe(post => {
      // console.log("WordpressService getPost subscriberd to next post");
      this.post$.next(post)
    });
  }
}
