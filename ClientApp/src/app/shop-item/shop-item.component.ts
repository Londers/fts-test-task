import { Component, Input, OnInit } from '@angular/core';
import { shopItem } from '../item-definitions';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() item: shopItem;

  constructor() { }

  ngOnInit() {
    console.log(this.item)
  }

}
