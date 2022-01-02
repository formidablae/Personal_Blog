import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule {

  // constructor() {
  //   console.log("Entered PostModule");
  // }
}
