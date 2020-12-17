import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Player } from 'app/models/player.model'
import { map } from 'rxjs/operators'

@Injectable()
export class DataService {
  readonly playersUrl: string = "assets/data/players.json"

  constructor(private http: HttpClient) {}

  //=================================
  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
  }

  //=================================
  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        map(players => {
          return players.filter(p => p.id == id)[0]
        })
      )
  }

}