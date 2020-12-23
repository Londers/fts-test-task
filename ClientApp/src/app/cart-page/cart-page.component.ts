import { Component, OnInit } from '@angular/core';
import { CartListService } from '../cart-list.service';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartList: cartItem[]

  constructor(private cartListService: CartListService) {
    cartListService.cartItemsObservable.subscribe(value => {
      this.cartList = value;
    })
  }

  ngOnInit() {
  }

  clearCart(): void {
    this.cartListService.clearCart();
  }
}
