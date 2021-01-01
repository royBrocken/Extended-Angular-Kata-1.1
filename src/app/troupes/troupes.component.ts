import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Troupe } from 'app/models/troupe.model'
import { State } from '../state/app.state'
import { FART_SALAD } from '../core/core.module'
import {
  TroupesSelectors,
  TroupesActions,
} from './state/'

function logit(message: string): ClassDecorator {
  return function (target) {
    console.log("ClassDecorator", message)
    console.table(arguments)
  }
}

function logitMethod(message: string): MethodDecorator {
  return function (target) {
    console.log("MethodDecorator", message)
    console.table(arguments)
  }
}

function logitParam(message: string): ParameterDecorator {
  return function (target) {
    console.log("ParameterDecorator", message)
    console.table(arguments)
  }
}

function logitProp(message: string): PropertyDecorator {
  return function (target) {
    console.log("PropertyDecorator", message)
    console.table(arguments)
  }
}

@Component({
  selector: 'app-troupes',
  templateUrl: './troupes.component.html',
  styleUrls: ['./troupes.component.sass'],
})
// @logit("hi from troupescomponent")
export class TroupesComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {
  // @logitProp("hi from test prop")
  // test = "testing 123"

  troupes$ = this.store.select(TroupesSelectors.getTroupes)
  displayTroupeColors$ = this.store.select(TroupesSelectors.getShowTroupeColors)
  selectedTroupe$ = this.store.select(TroupesSelectors.getSelectedTroupe)
  loadFailures$ = this.store.select(TroupesSelectors.getLoadFailure)

  constructor(
    @Inject(FART_SALAD) private hasFarts,
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.troupes$.subscribe(t => console.table(t))
    this.selectedTroupe$
    // .subscribe(
    //   t => console.table(t)
    // )

    console.log(hasFarts)
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes)
  }
  // @logitMethod("hi from ngOnInit")
  ngOnInit(): void {
    console.log("ngOnInit")
    this.store.dispatch(TroupesActions.loadTroupes())
  }

  // onSelectTroupe(@logitParam("hi from onselectTroupe param id") { id }: Troupe) {
  onSelectTroupe({ id }: Troupe) {
    this.store.dispatch(TroupesActions.loadTroupe({ id }))
    this.router.navigate([id], { relativeTo: this.route })
  }

  toggleDisplayTroupeColors() {
    this.store.dispatch(TroupesActions.toggleShowTroupeColorsAction())
  }

  addTroupe(troupe) {
    console.table(troupe)
  }
}
