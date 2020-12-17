import { BehaviorSubject, Subject } from 'rxjs'
import { filter, map } from 'rxjs/operators'

export class EventBusService {
  subject = new Subject<BusEvent>()

  on = (eventType: BusEventType, callback: any) =>
    this.subject.pipe(
      filter(e => e.type === eventType)
    ).subscribe(e => callback(e.value))

  emit = (event: BusEvent) => this.subject.next(event)
}

export type BusEventType = "birth" | "death"

export class BusEvent {
  constructor(
    public type: BusEventType,
    public value: any,
    public source: any = null
  ) { }

}