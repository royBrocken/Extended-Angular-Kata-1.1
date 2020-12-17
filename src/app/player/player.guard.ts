import { CanDeactivate } from '@angular/router'
import { Observable, of } from 'rxjs'
import { PlayerComponent } from './player.component'

export class PlayerGuard implements CanDeactivate<PlayerComponent> {
  canDeactivate(playerComponent: PlayerComponent): boolean {
    if (!playerComponent.playerForm.dirty) return true
    return confirm("You have unsaved changed!  Leave page anyhow, arsling?")
  }
}