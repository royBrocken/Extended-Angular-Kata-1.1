import { Pipe, PipeTransform } from '@angular/core'
import memo from 'memo-decorator'

@Pipe({ name: "abilityCategory" })
export class AbilityCategoryPipe implements PipeTransform {

  // @memo()
  transform(value: any, ...categories: string[]) {
    if (!value || isNaN(value)) return ""

    return categories[
      value < 7 ? 0 :
        value < 14 ? 1 :
          value < 18 ? 2 :
            3
    ]
  }
}