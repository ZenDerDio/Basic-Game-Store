import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../entities/item';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

  @Input() item: Item;

  constructor(private service: CartService) {
  }


  ngOnInit() {
  }

  addItemToCart(): void {
    this.service.addItemToCart(this.item);
  }

}
