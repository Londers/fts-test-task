import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: cartItem;

  constructor() { }

  ngOnInit() {
  }

}
