import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    // console.log("HeaderComponent constructor executed");
  }

  ngOnInit(): void {
    // console.log("HeaderComponent ngOnInit executed");
  }

}
