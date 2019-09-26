import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepServiceService {
  private dataSet = new BehaviorSubject<number>(1);
  public castDataSet = this.dataSet.asObservable();
  constructor() { }

  setDataSet(i) {
    this.dataSet.next(i);
  }
}
