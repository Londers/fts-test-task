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
  quantity = 1

  constructor(private cartListService: CartListService) { }

  ngOnInit() {
  }

  numberIncrease(): void {
    this.quantity++
  }

  numberDecrease(): void {
    if (this.quantity !== 0) this.quantity--
  }
  
  addToCart(): void {
    this.cartListService.addToCart(this.item, this.quantity)
  }
}
