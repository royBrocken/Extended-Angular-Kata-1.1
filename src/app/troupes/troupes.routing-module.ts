import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TroupesComponent } from './troupes.component'
import { NotesComponent } from '../shared/notes/notes.component'
import { BattlesComponent } from '../shared/battles/battles.component'
import { TroupesRouteGuard } from './troupes.guard'

const routes: Routes = [
  {
    path: "", component: TroupesComponent,
    canDeactivate: [TroupesRouteGuard]
  },
  {
    path: ":id", component: TroupesComponent,

    children: [
      {
        path: "notes",
        component: NotesComponent,
        outlet: "sidebar1"
      },
      {
        path: "battles",
        component: BattlesComponent,
        outlet: "sidebar1"
      },
      {
        path: "secondary",
        component: NotesComponent,
        outlet: "sidebar2"
      },
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [TroupesRouteGuard]
})
export class TroupesRoutingModule {
  static components = [TroupesComponent]
}