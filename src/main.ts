import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  // console.log("main environment.production");
  enableProdMode();
} else if (environment.staging) {
  // console.log("main environment.staging");
} else if (environment.qa) {
  // console.log("main environment.qa");
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// console.log("main bootstrapModule(AppModule) executed");
