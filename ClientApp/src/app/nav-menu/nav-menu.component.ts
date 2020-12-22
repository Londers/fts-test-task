import { Component } from '@angular/core';
import { cartItem } from '../item-definitions';
import { ShopListService } from '../shop-list.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  cartItems: cartItem[]
  collapse: boolean = true

  constructor(private ShopListService: ShopListService) { 
    this.cartItems = ShopListService.getCart()
  }
}
