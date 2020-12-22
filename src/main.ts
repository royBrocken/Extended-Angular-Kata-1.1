import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //xxTODO: create angular site with
  //xxTODO: sass styles (angular.json!)

  //xxTODO: create Core and Shared modules
  //xxTODO: create an http service
  //xxTODO: create 3 features with routes and component modules
  //xxTODO: user http service in component with sorting (get many)
  //xxTODO: create http service call with filtering (get one)
  //xTODO: implement lazy loading for features
  
  //xTODO: create reactive form with formArray/sub-group and validation
  //xTODO: create route guard for dirty form state

  //xTODO: create a pipe that uses caching (@memo)
  //xTODO: create a directive for element attribute

  //xTODO: create unit test
  
  //xTODO: create event bus service
  //xTODO: create a declarative http/event service that uses mergemap, forkjoin, switchmap

  //TODO: create container component with 2 presentation components
  //TODO: use named router-outlet tag to create 2 sidebar components
  //TODO: display immutable vs reference in change detection of component properties
  
  //TODO: create integration test
  //TODO: create e2e test
  
  //TODO: create http interceptor
  
  //TODO: setup ngrx-data store
 
  //TODO: use all component lifecycle hooks
  //TODO: use token in DI provider definition for service, constant
  
