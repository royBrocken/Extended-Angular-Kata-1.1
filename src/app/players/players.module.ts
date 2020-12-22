import { NgModule } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { PlayersRoutingModule } from "app/players/players.routing-module"

@NgModule({
  imports: [PlayersRoutingModule, SharedModule],
  declarations: [PlayersRoutingModule.components]
})
export class PlayersModule { }