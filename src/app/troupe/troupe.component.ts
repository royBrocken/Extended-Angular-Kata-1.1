import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Troupe } from 'app/models/troupe.model'

@Component({
  selector: 'app-troupe',
  templateUrl: './troupe.component.html',
  styleUrls: ['./troupe.component.sass']
})
export class TroupeComponent {
  @Input() troupe: Troupe | null
  @Input() displayTroupeColors: boolean
  @Output() addTroupeEvent = new EventEmitter<Troupe>()

  addTroupe() {
    this.addTroupeEvent.emit(<Troupe> {
      id: 678,
      colors: ["red", "yellow"],
      name:"Hesperians",
    })
  }

}
