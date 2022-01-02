import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'post/:id/:slug',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
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
