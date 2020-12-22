import { Component } from '@angular/core'
import { Player } from 'app/models/player.model'
import { Troupe } from 'app/models/troupe.model'
import { EMPTY } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { DataService } from '../core/services/data.service'
import { BusEvent, EventBusService } from '../core/services/event-bus.service'

@Component({
  selector: 'app-troupes',
  templateUrl: './troupes.component.html',
  styleUrls: ['./troupes.component.sass']
})
export class TroupesComponent {
  troupes$ = this.data.troupes$
  selectedTroupe$ = this.data.selectedTroupe$

  constructor(private data: DataService){}

  onSelectTroupe({ id }: Troupe) {
    this.data.selectTroupe(id)
  }
}
