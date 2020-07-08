import {Injectable} from '@angular/core';
import * as data from '../../data/items.json';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor() {
  }


  getProducts(): any {
    const arr = Object.values(data);

    return (arr[0]);
  }

}
