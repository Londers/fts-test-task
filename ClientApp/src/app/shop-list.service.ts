import { Injectable } from '@angular/core';
import json from '../assets/data.json';
import { shopItem } from './item-definitions';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {
  shopList: shopItem[]
  constructor() {
    this.shopList = json;
  }

  getShopList(): shopItem[] {
    return this.shopList;
  }
}
