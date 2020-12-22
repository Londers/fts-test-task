import { Injectable } from '@angular/core';
import json from '../assets/data.json';
import { cartItem, shopItem } from './item-definitions';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {

  shopList: shopItem[]
  itemsOnCart = JSON.parse(localStorage.getItem('cart'))

  constructor() {
    this.shopList = json;
    if (this.itemsOnCart === null) {
      localStorage.setItem('cart', '[]')
    }
  }

  //Получение списка товаров
  getShopList(): shopItem[] {
    return this.shopList;
  }

  //Методы для работы с корзиной
  getCart(): cartItem[] {
    return this.itemsOnCart;
  }

  addToCart(item: shopItem, quantity: number): cartItem[] {
    this.itemsOnCart.push({cartId: this.itemsOnCart.length, item: item, quantity: quantity});
    localStorage.setItem('cart', JSON.stringify(this.itemsOnCart))
    return this.itemsOnCart;
  }

  removeFromCart(cartId: number): cartItem[] {
    this.itemsOnCart = this.itemsOnCart.filter((cartItem: cartItem) => cartItem.id !== cartId);
    localStorage.setItem('cart', JSON.stringify(this.itemsOnCart))
    return this.itemsOnCart;
  }

  clearCart(): void {
    localStorage.setItem('cart', '[]')
  }
}
