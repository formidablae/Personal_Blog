import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../core/wordpress.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$ = this.wordpressService.getPosts();

  constructor(private wordpressService: WordpressService) {
    // console.log("HomeComponent constructor executed");
  }

  ngOnInit(): void {
    // console.log("HomeComponent ngOnInit executed");
  }

}
