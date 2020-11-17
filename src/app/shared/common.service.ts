import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  historyArray =  [];
  tempArray= new BehaviorSubject([]);

  constructor() { }
  addHistory(obj){
    this.historyArray.push(obj);
    this.tempArray.next(this.historyArray);

  }
}
