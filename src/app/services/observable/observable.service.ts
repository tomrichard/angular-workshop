import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getFruits(): Observable<any> {
    return of('apple', 'orange', 'grappe');
  }

  customObservable(): Observable<any> {

    return new Observable((subscriber) => {

      setTimeout(() => {
        subscriber.next('apple');
      }, 3000);

      setTimeout(() => {
        subscriber.next('orange');
      }, 6000);

      setTimeout(() => {
        subscriber.next('grappe');
      }, 9000);

      setTimeout(() => {
        subscriber.complete();
      }, 12000);

    });

  }

}
