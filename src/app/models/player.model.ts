class Model<T> {
  patch(model: T, values: Partial<T>) {
    //= Assign values to class properties that appear in values parameter
    Object.getOwnPropertyNames(model).filter(p =>
      Object.getOwnPropertyNames(values).includes(p)
    ).forEach(p => this[p] = values[p])
  }
}


//===============================
export class Player extends Model<Player> {
  id: string = null
  name: string = "Bloff?"
  troupe: string = "Redshirts"
  alignment: string = "chaotic evil"
  class: string = "fighter"
  armor: string = "none"
  abilities: PlayerAbilities = new PlayerAbilities({})
  backgrounds: string[] = []
  
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