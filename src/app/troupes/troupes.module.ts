import { NgModule } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { TroupesRoutingModule } from './troupes.routing-module'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [TroupesRoutingModule, SharedModule, RouterModule, CommonModule],
  declarations: [TroupesRoutingModule.components]
})
export class TroupesModule { }