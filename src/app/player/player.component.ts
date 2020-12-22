import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Player, PlayerAbilities } from 'app/models/player.model'
import { DataService } from '../core/services/data.service'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms'
import { ValidatorsService } from 'app/core/services/validators.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {
  player: Player
  playerForm: FormGroup

  validationMessages: object = {
    name: { required: "This is a required field" },
    troupe: { required: "This is a required field" },
    class: { required: "This is a required field" },
    alignment: { required: "This is a required field" },
    abilities: {
      strength: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
      wisdom: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
      dexterity: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
      intelligence: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
      charisma: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
      constitution: {
        required: "This is a required field",
        range: "Must be a number between 3 and 20"
      },
    }
  }
  currentMessages: any = {}

  get backgrounds(): FormArray {
    return this.playerForm.get("backgrounds") as FormArray
  }


  //=============================
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  //=============================
  ngOnInit(): void {
    this.playerForm = this.fb.group({
      name: ["", [Validators.required]],
      troupe: ["", [Validators.required]],
      class: ["", [Validators.required]],
      alignment: ["", [Validators.required]],
      abilities: this.fb.group(
        {
          strength: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
          wisdom: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
          dexterity: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
          intelligence: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
          charisma: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
          constitution: ["0", [Validators.required, ValidatorsService.range(3, 20)]],
        },
      ),
      backgrounds: this.fb.array([''])
    })

    this.route.params.subscribe(params => {
      const playerId = params.id

      // this.data.getPlayer(playerId).subscribe(player => {
      //   if (!player) return //= new player or not found
      //   this.initializePlayer(player)
      // })
    })

    this.playerForm.valueChanges.subscribe(v => {
      this.currentMessages = ValidatorsService.processMessages(
        this.playerForm, this.validationMessages
      )
    })
  }

  //==================
  deleteBackground(target: AbstractControl) {
    this.playerForm.setControl("backgrounds",
      new FormArray(this.backgrounds.controls.filter(c => c !== target))
    )
  }

  //==================
  addBackground() {
    this.backgrounds.push(new FormControl(['']))
  }

  //==================
  getError(controlPath: string): string {
    return ValidatorsService.getErrorMessage(this.currentMessages, controlPath)
  }

  //======================
  submitPlayerForm() {
    this.extractPlayerFromForm()
  }

  //======================
  initializePlayer(player: any) {
    this.player = new Player(player)

    this.playerForm.reset()

    this.playerForm.patchValue({
      id: this.player.id,
      name: this.player.name,
      troupe: this.player.troupe,
      class: this.player.class,
      alignment: this.player.alignment,
      abilities: {
        strength: this.player.abilities.strength,
        wisdom: this.player.abilities.wisdom,
        dexterity: this.player.abilities.dexterity,
        intelligence: this.player.abilities.intelligence,
        charisma: this.player.abilities.charisma,
        constitution: this.player.abilities.constitution,
      },

    })
    this.playerForm.setControl("backgrounds",
      this.fb.array(this.player.backgrounds)
    )
  }

  //==================
  extractPlayerFromForm() {
    let p = new Player({
      name: this.playerForm.get("name").value,
      alignment: this.playerForm.get("alignment").value,
      class: this.playerForm.get("class").value,
      troupe: this.playerForm.get("troupe").value,
      abilities: new PlayerAbilities({
        strength: this.playerForm.get("abilities.strength").value,
        wisdom: this.playerForm.get("abilities.wisdom").value,
        dexterity: this.playerForm.get("abilities.dexterity").value,
        intelligence: this.playerForm.get("abilities.intelligence").value,
        charisma: this.playerForm.get("abilities.charisma").value,
        constitution: this.playerForm.get("abilities.constitution").value,
      }),
      backgrounds: this.backgrounds.controls.map(c => c.value)
    })
  }

}

