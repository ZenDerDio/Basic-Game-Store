import {Injectable} from '@angular/core';
import {Item} from '../entities/item';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  private itemsInCart: Item[] = [];

  addItemToCart(item: Item) {
    if (this.itemsInCart.includes(item)) {
      const indexOfExistingItem = this.itemsInCart.findIndex(itemInCart => itemInCart === item);
      this.itemsInCart[indexOfExistingItem].quantity += 1;
    } else {
      this.itemsInCart.push(item);
      this.itemsInCart[(this.itemsInCart.length - 1)].quantity = 1;
    }
  }

  getItemsInCart(): Observable<Item[]> {
    return of(this.itemsInCart);
  }

  removeItemFromCart(itemToBeRemoved: Item): void {
    this.itemsInCart.splice(this.itemsInCart.indexOf(itemToBeRemoved), 1);
  }
}
