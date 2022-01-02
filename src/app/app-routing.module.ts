import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      routeState: '1',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      routeState: '2',
    },
  },
  {
    path: 'post/:id/:slug',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
    data: {
      routeState: '3',
    },
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: QuicklinkStrategy,
      },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // constructor() {
  //   console.log("Entered AppRoutingModule");
  // }
}
