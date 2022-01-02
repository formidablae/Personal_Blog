import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './animations';

@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  title = 'personal-blog';

  // constructor() {
  //   console.log("Entered AppComponent");
  // }

  getOutlet(routerOutlet: RouterOutlet) {
    return routerOutlet.activatedRouteData['routeState'];
  }
}
