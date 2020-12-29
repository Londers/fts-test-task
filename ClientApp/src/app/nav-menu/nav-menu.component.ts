import { Component } from '@angular/core';
import { cartItem } from '../item-definitions';
import { CartListService } from '../cart-list.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  cartItems: cartItem[]
  collapse: boolean = true

  constructor(private cartListService: CartListService) { 
    cartListService.cartItemsObservable.subscribe(value => {
      this.cartItems = value;
    })
  }
}
