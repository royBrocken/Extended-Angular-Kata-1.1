import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from "@angular/core"
import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { EventBusService } from './services/event-bus.service'


class SingletonCheck {
  //TODO: finish this
}


@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [CommonModule, HttpClientModule, NavbarComponent],
  providers: [DataService, EventBusService],
  declarations: [NavbarComponent]

})
export class CoreModule extends SingletonCheck {
  constructor() {
    super()

  }
}

