import { NgModule } from '@angular/core'
import { SharedModule } from 'app/shared/shared.module'
import { TroupesRoutingModule } from './troupes.routing-module'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { troupesReducer } from './state/troupes.reducer'
import { EffectsModule } from '@ngrx/effects'
import { TroupesEffects } from './state/troupes.effects'
import { TroupeComponent } from '../troupe/troupe.component'


@NgModule({
  imports: [
    TroupesRoutingModule,
    SharedModule,
    RouterModule,
    CommonModule,
    StoreModule.forFeature("troupes", troupesReducer),
    EffectsModule.forFeature([TroupesEffects]),
  ],
  declarations: [TroupesRoutingModule.components, TroupeComponent]
})
export class TroupesModule { }