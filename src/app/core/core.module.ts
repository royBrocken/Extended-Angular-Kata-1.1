import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from "@angular/core"
import { DataService } from './services/data.service'
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { EventBusService } from './services/event-bus.service'


class SingletonCheck {
  //TODO: finish this
}

export const OLD_DATA_SERVICE: symbol = Symbol("aliasForAService")
export const FART_SALAD = Symbol("farts?")

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule, NavbarComponent],
  providers: [
    { provide: OLD_DATA_SERVICE, useExisting: DataService },
    { provide: FART_SALAD, useValue: "FARTS!"},
    DataService, 
    EventBusService
  ],
  declarations: [NavbarComponent]

})
export class CoreModule extends SingletonCheck {
  constructor() {
    super()

  }
}

