import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: "player", loadChildren:
      () => { return import("app/player/player.module").then(m => m.PlayerModule) }
  },
  {
    path: "troupes", loadChildren:
      () => import("./troupes/troupes.module").then(m => m.TroupesModule)
  },
  {
    path: "troupe", loadChildren:
      () => { return import("app/troupe/troupe.module").then(m => m.TroupeModule) }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
