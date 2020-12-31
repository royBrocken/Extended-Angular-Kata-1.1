import { CommonModule } from '@angular/common'
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from '@angular/forms'
import { AbilityCategoryPipe } from './abilityCategory.pipe'
import { ColorerDirective } from './colorer.directive';
import { NotesComponent } from './notes/notes.component';
import { BattlesComponent } from './battles/battles.component'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, AbilityCategoryPipe, ColorerDirective],
  declarations: [AbilityCategoryPipe, ColorerDirective, NotesComponent, BattlesComponent]
})
export class SharedModule { }