import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TroupesModule } from './troupes/troupes.module'
import { TroupesComponent } from './troupes/troupes.component'
import { BattlesComponent } from './shared/battles/battles.component'
import { NotesComponent } from './shared/notes/notes.component'

const routes: Routes = [
  {
    path: "player", loadChildren:
      () => { return import("app/player/player.module").then(m => m.PlayerModule) }
  },
  {
    path: "players", loadChildren:
    () => { return import("app/players/players.module").then(m => m.PlayersModule)}
  },
  {
    path: "troupes", loadChildren:
      () => import("./troupes/troupes.module").then(m => m.TroupesModule)
  },
  // {
  //   path: "troupe", loadChildren:
  //     () => { return import("app/troupe/troupe.module.x").then(m => m.TroupeModule) }
  // },
  {
    path: "**", redirectTo: "troupes"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
