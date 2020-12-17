import { CommonModule } from '@angular/common'
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from '@angular/forms'
import { AbilityCategoryPipe } from './abilityCategory.pipe'
import { ColorerDirective } from './colorer.directive'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule, AbilityCategoryPipe, ColorerDirective],
  declarations: [AbilityCategoryPipe, ColorerDirective]
})
export class SharedModule { }