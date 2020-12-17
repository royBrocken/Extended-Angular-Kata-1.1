import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Player, PlayerAbilities } from 'app/models/player.model'
import { DataService } from '../core/services/data.service'
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms'

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
          strength: ["0", [Validators.required, CustomValidators.range(3, 20)]],
          wisdom: ["0", [Validators.required, CustomValidators.range(3, 20)]],
          dexterity: ["0", [Validators.required, CustomValidators.range(3, 20)]],
          intelligence: ["0", [Validators.required, CustomValidators.range(3, 20)]],
          charisma: ["0", [Validators.required, CustomValidators.range(3, 20)]],
          constitution: ["0", [Validators.required, CustomValidators.range(3, 20)]],
        },
      ),
      backgrounds: this.fb.array([''])
    })

    this.route.params.subscribe(params => {
      const playerId = params.id

      this.data.getPlayer(playerId).subscribe(player => {
        
        if (!player) return //= new player or not found
        
        this.initializePlayer(player)
      })
    })

    this.playerForm.valueChanges.subscribe(v => {
      this.currentMessages = CustomValidators.processMessages(
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
    return CustomValidators.getMessagesByPath(this.currentMessages, controlPath)
  }

  //==================
  extractPlayerFromForm() {
    let p: Player = new Player({
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
    console.log(p)
  }

  //======================
  submitPlayerForm() {
    this.extractPlayerFromForm()
  }

  //======================
  initializePlayer(player: Player) {
    this.player = player

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
}

//=============================================================
class CustomValidators {
  //==================
  static getMessagesByPath(currentMessages: any, controlPath: string) {
    const controlPaths = controlPath.split(".")

    //= walk the currentMessages object tree to controlPath control entry
    let messageNode: any =
      controlPaths.reduce((messages: any, path: string) =>
        messages && messages[path] ? messages[path] : null
        , currentMessages
      )

    if (!messageNode) return "" //= messages not found for target control

    //= Return the 1st error in control errors object that is non-empty string
    return (Object.values(messageNode) as string[]).filter(m => m.length > 0)[0]
  }

  //==================
  static processMessages(
    formGroup: FormGroup,
    validationMessages: object,
    currentMessages: object = {}
  ): any {
    Object.entries(formGroup.controls).forEach(([ctrlKey, control]) => {
      if (!validationMessages[ctrlKey]) return //==> no validation messages defined

      if (control instanceof FormGroup) {
        currentMessages[ctrlKey] = this.processMessages(
          control, validationMessages[ctrlKey], currentMessages[ctrlKey]
        )

      } else {
        if (!control.errors) return //==> no errors

        currentMessages[ctrlKey] = {}
        Object.keys(control.errors).forEach(errType => {
          const messageExists = validationMessages[ctrlKey][errType]

          if (messageExists) {
            currentMessages[ctrlKey][errType] = validationMessages[ctrlKey][errType]
          }
        })
      }
    })

    return currentMessages
  }


  //==================
  static range(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null =>
      (c.value && isNaN(c.value) || c.value < min || c.value > max)
        ? { range: true } //= error
        : null
  }
}
