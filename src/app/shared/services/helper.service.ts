import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  beautifulDate(date: string, srcFormat= 'YYYY-MM-DD', destFormat = 'DD MMMM YY'): string {
    return moment(date, srcFormat).format(destFormat);
  }
}
