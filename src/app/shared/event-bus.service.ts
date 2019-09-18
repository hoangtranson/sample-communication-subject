import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();

  constructor() { }

  emit(event) {
    this.subject$.next(event);
  }

  on(event, action): Subscription {
    return this.subject$.pipe(
      filter( e => e["name"] === event),
      map( e => e["value"])).subscribe(action);
  }
}
