import { NgModule } from "@angular/core"
import { SharedModule } from 'app/shared/shared.module'
import { PlayerRoutingModule } from './player.routing-module'

@NgModule({
  imports: [PlayerRoutingModule, SharedModule],
  declarations: PlayerRoutingModule.components
})
export class PlayerModule { }