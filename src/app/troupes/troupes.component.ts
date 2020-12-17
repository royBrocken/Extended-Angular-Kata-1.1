import { Component, OnInit } from '@angular/core'
import { Player } from 'app/models/player.model'
import { DataService } from '../core/services/data.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { BusEvent, EventBusService } from '../core/services/event-bus.service'

@Component({
  selector: 'app-troupes',
  templateUrl: './troupes.component.html',
  styleUrls: ['./troupes.component.sass']
})
export class TroupesComponent implements OnInit {
  players$: Observable<Player[]>
  bairn: number = 0

  constructor(private data: DataService, private eventBus: EventBusService) { }

  ngOnInit(): void {
    this.players$ = this.data.getAllPlayers()
      .pipe<Player[]>(
        map((r: Player[]) => 
          r.sort((a, b) => a.troupe.localeCompare(b.troupe))
        )
      )
  }

  bearABairn() {
    this.eventBus.emit(new BusEvent("birth", this.bairn++))
  }
}
