import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import json from '../assets/data.json';
import { cartItem, shopItem } from './item-definitions';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  shopList: shopItem[]
  itemsOnCart: cartItem[] = []

  public cartItemsObservable = new BehaviorSubject <cartItem[]>(this.itemsOnCart);

  emitConfig(val: cartItem[]) {
    this.cartItemsObservable.next(val);
  }

  constructor() {
    this.shopList = json;
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]')
    }
    this.emitConfig(JSON.parse(localStorage.getItem('cart')));
  }

  //Получение списка товаров
  getShopList(): shopItem[] {
    return this.shopList;
  }

  //Методы для работы с корзиной
  getCartList(): cartItem[] {
    return this.itemsOnCart;
  }

  addToCart(item: shopItem, quantity: number): void {
    this.itemsOnCart.push({ cartId: this.itemsOnCart.length, shopItem: item, quantity: quantity });
    this.emitConfig(this.itemsOnCart)
    localStorage.setItem('cart', JSON.stringify(this.itemsOnCart))
    // return this.itemsOnCart;
  }

  removeFromCart(cartId: number): cartItem[] {
    this.itemsOnCart = this.itemsOnCart.filter((cartItem: cartItem) => cartItem.cartId !== cartId);
    localStorage.setItem('cart', JSON.stringify(this.itemsOnCart))
    return this.itemsOnCart;
  }

  clearCart(): void {
    this.emitConfig([]);
    localStorage.setItem('cart', '[]')
  }
}
