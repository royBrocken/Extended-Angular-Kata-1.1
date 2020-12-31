import { Model } from './model.model'

export class Troupe extends Model<Troupe> {
  id: number = 0
  name: string = "Redshirts"
  colors: string[] = ["black"]

  constructor(values: Partial<Troupe>) {
    super()
    this.patch(this, values)
  }
}