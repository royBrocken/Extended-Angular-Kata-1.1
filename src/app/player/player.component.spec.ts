import { PlayerComponent } from './player.component'
import { of } from 'rxjs'
import { FormBuilder } from '@angular/forms'
import { DataService } from '../core/services/data.service'
import { ActivatedRoute } from '@angular/router'
import { Player, PlayerAbilities } from 'app/models/player.model'


describe(("PlayerComponent unit test"), () => {
  const PLAYERS_DATA = [new Player({
    id: "1",
    name: "Conan",
    troupe: "Cimerians",
    class: "fighter",
    abilities: new PlayerAbilities({
      strength: 10,
      wisdom: 10,
      dexterity: 10,
      intelligence: 10,
      charisma: 10,
      constitution: 10
    }),
    backgrounds: ["surfing", "sleeping", "eating"]
  }),
  new Player({
    id: "2",
    name: "Blof",
    troupe: "NPC",
    class: "fighter",
    abilities: new PlayerAbilities({
      strength: 10,
      wisdom: 10,
      dexterity: 10,
      intelligence: 10,
      charisma: 10,
      constitution: 10
    }),
    backgrounds: ["bleeding", "eating"]
  })]

  let sut: PlayerComponent
  let mockDataService: any

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(DataService, ["getAllPlayers"])
    mockDataService.getAllPlayers.and.returnValue(of(PLAYERS_DATA))

    sut = new PlayerComponent(
      mockDataService,
      <ActivatedRoute>{ params: { subscribe: () => { } } },
      new FormBuilder()
    )
  })

  it("should create playerForm", () => {
    sut.ngOnInit()
    expect(sut.playerForm).toBeDefined()
  })

  it("should initialize player when initializePlayer is called", () => {
      sut.ngOnInit()
      sut.initializePlayer(PLAYERS_DATA[1])

      expect(sut.player).toBe(PLAYERS_DATA[1])
  })

  it("should initialize player form properties when initializePlayer is called", () => {
      sut.ngOnInit()
      sut.initializePlayer(PLAYERS_DATA[1])

      expect(sut.playerForm.get("name").value).toBe(PLAYERS_DATA[1].name)
  })


  it("should delete background item when deleteBackground is called", () => {
    sut.ngOnInit()
    sut.initializePlayer(PLAYERS_DATA[0])

    sut.deleteBackground(sut.backgrounds.controls[1])

    expect(sut.backgrounds.length).toBe(2)
  })
})