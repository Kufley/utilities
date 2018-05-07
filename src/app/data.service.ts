import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Month} from './month'
import { MONTHS } from './mock-date';



@Injectable({
  providedIn: 'root'
})

export class DataService {


  getMonths(): Observable<Month[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(MONTHS);
  }
  constructor() { }
}
