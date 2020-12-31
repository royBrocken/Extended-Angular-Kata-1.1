import { NgModule } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { TroupeRoutingModule } from './troupe.routing-module'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [TroupeRoutingModule, SharedModule, CommonModule],
  declarations: [TroupeRoutingModule.components]
})
export class TroupeModule { }