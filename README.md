# Extended Kata 1

## Sass
- create angular site with
- sass styles (angular.json!) and variables, ie $primary, $accent etc
- create a responsive header/nav/main/aside/footer layout using display:grid and media queries

## Angular Framework
- create Core and Shared modules
- create an http service
- create partial class generic Model for models
- create 3 features with routes and component modules
- user http service in component with sorting (get many)
- create http service call with filtering (get one)
- implement lazy loading for features

## Reactive Forms
- create reactive form with formArray/sub-group and validation
- create route guard for dirty form state

- create a pipe that uses caching (@memo)
- create a directive for element attribute

- create unit test

## RxJs
- create event bus service
- create a declarative http/event service that uses mergemap, forkjoin, switchmap

## NgRx
- setup ngrx state store in 1 feature
- create initial state and 1 reducer, action, selector
- hook up async DataService http call using effect (loadTroupe, loadTroupeSuccess)
- use state observable in a feature component

## More Framework
- create container component with a presentation component

- create child router-outlet and 2 routes
- use named router-outlet tag to create 2 sidebar components
//==== Note: Named route is wonky, maybe due to lazy loading, does not work off of main child route (path:"")

- create http interceptor that amends request to add Content-Type header
- create http interceptor that logs response body
- create route guard

- use DI token in provider definition for service and value (useClass, useValue)
- implement all component lifecycle hooks
