import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs'
import { Player } from 'app/models/player.model'
import { catchError, map, scan, shareReplay, tap } from 'rxjs/operators'
import { Troupe } from 'app/models/troupe.model'

@Injectable()
export class DataService {
  readonly playersUrl: string = "assets/data/players.json"
  readonly troupeUrl: string = "assets/data/troupes.json"

  //==========================================
  players$ = this.getAllPlayers()
    .pipe(
      map(players => players.map(p => new Player(p))),
      catchError(e => {
        console.log("DataService getAllPlayers error", e)
        return throwError(e)
      }),
      shareReplay(1)
    )

  //==========================================
  troupes$ = this.getAllTroupes()
    .pipe(
      catchError(e => {
        console.error(e)
        return throwError(e)
      }),
      shareReplay(1)
    )

  //==========================================
  private addPlayerSubject = new Subject<Partial<Player>>()
  private addPlayerAction$ = this.addPlayerSubject.asObservable()

  playersWithAdd$ = merge(
    this.players$,
    this.addPlayerAction$
  ).pipe(
    scan((players: Player[], newPlayer: Player) =>
      [...players, new Player(newPlayer)] as Player[]
    ),
    tap(p => console.log("playersWithAdd", p))
  )

  //==========================================
  selectTroupeSubject = new BehaviorSubject<number>(0)
  selectTroupeAction$ = this.selectTroupeSubject.asObservable()

  selectedTroupe$ = combineLatest([
    this.troupes$,
    this.selectTroupeAction$
  ]).pipe(
    map(([troupes, troupeId]) => troupes.find(t => t.id === troupeId)),
  )

  //==========================================
  private selectPlayerSubject = new BehaviorSubject<number>(2)
  private selectPlayerAction$ = this.selectPlayerSubject.asObservable()

  selectedPlayer$ = combineLatest([
    this.playersWithAdd$,
    this.troupes$,
    this.selectPlayerAction$
  ]).pipe(
    map(([players, troupes, selectedPlayerId]) => {
      const player = players.find(p => p.id === selectedPlayerId)
      player._troupe = troupes.find(t => t.id === player.troupe)
      return player
    }
    ),
  )


  constructor(private http: HttpClient) { }

  //=================================
  getAllTroupes(): Observable<Troupe[]> {
    return this.http.get<Troupe[]>(this.troupeUrl)
  }

  //=================================
  getAllPlayers(): Observable<any[]> {
    return this.http.get<Player[]>(this.playersUrl)
  }


  // Actions ========================
  //=================================
  selectTroupe(id: number) {
    this.selectTroupeSubject.next(id)
  }

  //=================================
  selectPlayer(id: number) {
    this.selectPlayerSubject.next(id)
  }

  //=================================
  addPlayer(player: Partial<Player>) {
    this.addPlayerSubject.next(player)
  }
}