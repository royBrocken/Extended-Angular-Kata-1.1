import { NgModule } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { TroupeRoutingModule } from './troupe.routing-module'

@NgModule({
  imports: [TroupeRoutingModule, SharedModule],
  declarations: [TroupeRoutingModule.components]
})
export class TroupeModule { }