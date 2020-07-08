import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../services/fetch-data.service';
import {Item} from '../entities/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private service: FetchDataService) {
  }

  items: Item[];

  ngOnInit() {
    this.items = [...this.service.getProducts()];
  }

}
