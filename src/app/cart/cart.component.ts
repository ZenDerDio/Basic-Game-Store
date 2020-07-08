import {Component, OnInit} from '@angular/core';
import {Item} from '../entities/item';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service: CartService) {
  }

  itemsInCart: Item [];
  totalAmount: number;

  ngOnInit() {
    this.service.getItemsInCart().subscribe(itemsList => this.itemsInCart = itemsList);
  }

  totalPrice(): void {
    this.totalAmount = 0;
    this.itemsInCart.forEach(item => this.totalAmount += Math.round(((item.price * item.quantity) + Number.EPSILON) * 100) / 100);
  }
}
