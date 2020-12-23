import { Component, OnInit } from '@angular/core';
import { shopItem } from 'src/app/item-definitions';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  shopList: shopItem[]
  constructor(private cartListService: CartListService) { }

  ngOnInit() {
    this.shopList = this.cartListService.getShopList()
  }

}
