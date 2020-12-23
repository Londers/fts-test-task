import { Component, Input, OnInit } from '@angular/core';
import { shopItem } from '../item-definitions';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() item: shopItem;

  constructor(private cartListService: CartListService) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.cartListService.addToCart(this.item, 1)
  }
}
