import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TroupesComponent } from './troupes.component'

const routes: Routes = [
  { 
    path: "", component: TroupesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TroupesRoutingModule{
  static components = [TroupesComponent]
}