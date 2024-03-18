import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//da run la aplicatia
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
