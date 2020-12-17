import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: "[appColorer]"
})
export class ColorerDirective implements OnInit {
  @Input() appColorer: string

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style["color"] = this.appColorer
  }

}