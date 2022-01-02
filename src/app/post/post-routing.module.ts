import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {

  // constructor() {
  //   console.log("Entered PostRoutingModule");
  // }
}
