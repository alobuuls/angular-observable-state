import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Idata {
  name: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private data$: BehaviorSubject<Idata> = new BehaviorSubject({name: 'initial'});

  constructor() {}

  getData() {
    return this.data$.asObservable();
  }

  addData(val:Idata) {
    this.data$.next(val);
  }
}
