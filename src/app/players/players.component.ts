import { Component, OnInit } from '@angular/core'
import { DataService } from 'app/core/services/data.service'
import { EventBusService, BusEvent } from 'app/core/services/event-bus.service'
import { Player } from 'app/models/player.model'
import { EMPTY, combineLatest } from 'rxjs'
import { catchError, filter, map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent {
  bairn: number = 0

  pageTitle$ = this.data.selectedPlayer$
    .pipe(
      tap(() => "pageTitle subscribed"),
      map(p => p ? `Name: ${p.name}` : null)
    )

  playersWithAdd$ = this.data.playersWithAdd$
    .pipe(
      map(players => players.sort((a, b) => a.name.localeCompare(b.name))),
      catchError(err => {
        console.log("PlayersComponent", err)
        return EMPTY
      })
    )

  selectedPlayer$ = this.data.selectedPlayer$
    .pipe(
      tap(p => console.log("selectedPlayer", p)),
      catchError(err => {
        console.log("PlayersComponent selectedPlayer", err)
        return EMPTY
      })
    )

  vm$ = combineLatest([
    this.pageTitle$, this.playersWithAdd$, this.selectedPlayer$
  ]).pipe(
    map(([pageTitle, players, selectedPlayer]) => ({
      pageTitle, players, selectedPlayer
    }))
  )

  constructor(
    private data: DataService,
    private eventBus: EventBusService) {
  }

  addPlayer() {
    this.eventBus.emit(new BusEvent("birth", this.bairn++))
    this.data.addPlayer(null)
  }

  onSelectPlayer({ id }: Player) {
    this.data.selectPlayer(id)
  }
}