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

  public cartItemsObservable = new BehaviorSubject<cartItem[]>(this.itemsOnCart);

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
  //Получение массива добавленных в корзину товаров
  getCartList(): cartItem[] {
    return this.cartItemsObservable.getValue();
  }

  //Добавление товара в корзину
  addToCart(item: shopItem, quantity: number): void {
    let itemsOnCart = this.getCartList();
    itemsOnCart.push({ cartId: itemsOnCart.length, shopItem: item, quantity: quantity });
    this.emitConfig(itemsOnCart)
    localStorage.setItem('cart', JSON.stringify(itemsOnCart))
  }

  //Изменение количества товара
  changeQuantity(cartId: number, newQuantity: number) {
    let itemsOnCart = this.getCartList();
    itemsOnCart[cartId].quantity = newQuantity
    this.emitConfig(itemsOnCart)
    localStorage.setItem('cart', JSON.stringify(itemsOnCart))
  }

  //Удаление товара из корзины
  removeFromCart(cartId: number): void {
    let itemsOnCart = this.getCartList();
    itemsOnCart = itemsOnCart.filter((cartItem: cartItem) => cartItem.cartId !== cartId);
    this.emitConfig(itemsOnCart)
    localStorage.setItem('cart', JSON.stringify(itemsOnCart))
  }

  //Очистка корзины
  clearCart(): void {
    this.emitConfig([]);
    localStorage.setItem('cart', '[]')
  }
}
