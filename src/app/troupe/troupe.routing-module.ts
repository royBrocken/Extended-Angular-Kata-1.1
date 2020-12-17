import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TroupeComponent } from './troupe.component'

const routes: Routes = [
  { 
    path: "", component: TroupeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TroupeRoutingModule{
  static components = [TroupeComponent]
}