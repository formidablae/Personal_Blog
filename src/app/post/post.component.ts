import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsAnimation } from '../animations';
import { WordpressService } from '../core/wordpress.service';
import { IPost } from '../post.model';

@Component({
  selector: 'pb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [postsAnimation],
})
export class PostComponent implements OnInit {
  post!: IPost;

  constructor(
    private route: ActivatedRoute,
    private wordpressService: WordpressService,
  ) {
    this.wordpressService.post$.subscribe(data => {
      // console.log("PostComponent constructor executed");
      this.post = data;
    });
  }

  ngOnInit(): void {
    // console.log("PostComponent ngOnInit executed");
    this.route.params.subscribe(params => {
      // console.log("PostComponent ngOnInit route params subscribed:", params);
      this.wordpressService.getPost(params['id']);
    });
  }
}
