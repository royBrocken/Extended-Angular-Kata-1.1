import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

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
  {
    path: "troupe", loadChildren:
      () => { return import("app/troupe/troupe.module").then(m => m.TroupeModule) }
  },
  {
    path: "**", redirectTo: "troupes"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
