import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//xTODO: Break this kata up into 3 katas, then create 3+ scenarios/schemas to apply to them for variety
// Schemas:  
//    RPG troupe - troupes, players, characters
//    Rock band - bands, members, gigs
//    Sailing - fleet, ships, destinations

//xTODO: create angular site with
//xTODO: sass styles (angular.json!) and variables, ie $primary, $accent etc
//xTODO: create a responsive header/nav/main/aside/footer layout using display:grid and media queries

//xTODO: create Core and Shared modules
//xTODO: create an http service
//xTODO: create partial class generic Model for models
//xTODO: create 3 features with routes and component modules
//xTODO: user http service in component with sorting (get many)
//xTODO: create http service call with filtering (get one)
//xTODO: implement lazy loading for features

//xTODO: create reactive form with formArray/sub-group and validation
//xTODO: create route guard for dirty form state

//xTODO: create a pipe that uses caching (@memo)
//xTODO: create a directive for element attribute

//xTODO: create unit test

//xTODO: create event bus service
//xTODO: create a declarative http/event service that uses mergemap, forkjoin, switchmap

//xTODO: setup ngrx state store in 1 feature
//xTODO: create initial state and 1 reducer, action, selector
//xTODO: hook up async DataService http call using effect (loadTroupe, loadTroupeSuccess)
//xTODO: use state observable in a feature component

//xTODO: create container component with a presentation component

//xTODO: create child router-outlet and 2 routes
//xTODO: use named router-outlet tag to create 2 sidebar components
//==== Note: Named route is wonky, maybe due to lazy loading, does not work off of main child route (path:"")

//xTODO: create http interceptor that amends request to add Content-Type header
//xTODO: create http interceptor that logs response body
//xTODO: create route guard

//xTODO: use DI token in provider definition for service and value (useClass, useValue)
//xTODO: implement all component lifecycle hooks


//TODO: OAuth stuff
//TODO: create integration test
//TODO: create e2e test
