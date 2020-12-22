import { Model } from './model.model'

export class Troupe extends Model<Troupe> {
  id: number = null
  name: string = "Redshirts"

  constructor(values: Partial<Troupe>) {
    super()
    this.patch(this, values)
  }
}