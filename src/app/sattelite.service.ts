import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime, shareReplay, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SatteliteService {

  private satName = 'SATTEFI- US-117';
  private satNum = 0;

  constructor() { }

  getSatNum() {
    return this.satNum;
  }
  getSatName() {
    return this.satName;
  }
  findSattelite() {
    this.satNum = Math.floor(Math.random() * 4) + 1;
    return of(
      { 'satNum': this.satNum, 'satName': 'SATTEFI- US-117' }
    ).pipe(delay(300));
  }
}
