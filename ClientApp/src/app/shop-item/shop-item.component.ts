import { Component, Input, OnInit } from '@angular/core';
import { shopItem } from '../item-definitions';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() item: shopItem;

  constructor(private ShopListService: ShopListService) { }

  ngOnInit() {
  }

  addToCart(): void {
    this.ShopListService.addToCart(this.item, 1)
  }
}
