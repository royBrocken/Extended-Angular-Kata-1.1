import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  id: any

  constructor(
    private route: ActivatedRoute
  ) { 
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      p => this.id = p.id
    )
  }

}
