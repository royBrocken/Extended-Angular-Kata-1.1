import { Component, OnInit } from '@angular/core'
import { EventBusService } from '../services/event-bus.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent  {
  bairns: any = "???"

  constructor(private eventBus: EventBusService) {
    eventBus.on("birth", (d) => {
      this.bairns = d
    })
  }
}
