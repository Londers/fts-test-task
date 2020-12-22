import { Component, OnInit } from '@angular/core';
import { shopItem } from 'src/app/item-definitions';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  shopList: shopItem[]
  constructor(private shopListService: ShopListService) { }

  ngOnInit() {
    this.shopList = this.shopListService.getShopList()
  }

}
