import { Model } from './model.model'
import { Troupe } from 'app/models/troupe.model'

export class Player extends Model<Player> {
  id: number = null
  name: string = "Bloff?"
  troupe: number = 3
  alignment: string = "chaotic evil"
  class: string = "fighter"
  armor: string = "none"
  abilities: PlayerAbilities = new PlayerAbilities({})
  backgrounds: string[] = []
  _troupe?: Troupe
  
  summary: () => string = () => `${this.troupe} - ${this.name}`

  constructor(values: Partial<Player>) {
    super()
    this.patch(this, values)
  }
}

export class PlayerAbilities extends Model<PlayerAbilities>{
  strength: number = 0
  wisdom: number = 0
  dexterity: number = 0
  intelligence: number = 0
  charisma: number = 0
  constitution: number = 0

  constructor(values: Partial<PlayerAbilities>) {
    super()
    this.patch(this, values)
  }

}