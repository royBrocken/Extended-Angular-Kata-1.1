import { Routes, RouterModule } from '@angular/router'
import { Component, NgModule } from '@angular/core'
import { PlayerComponent } from './player.component'
import { PlayerGuard } from './player.guard'

const routes: Routes = [
  {
    path: ":id", component: PlayerComponent, canDeactivate: [PlayerGuard]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [PlayerGuard]
})
export class PlayerRoutingModule {
  static components = [PlayerComponent]
}