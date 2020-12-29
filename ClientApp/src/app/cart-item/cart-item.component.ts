import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: cartItem;
  @Input() edit: boolean;
  @Output() changeItemQuantityEvent = new EventEmitter<cartItem>();
  @Output() removeItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  quantityDecrease() {
    this.item.quantity--
    (this.item.quantity === 0) ? this.removeItem() : this.changeItemQuantityEvent.emit(this.item);
  }

  quantityIncrease() {
    this.item.quantity++
    this.changeItemQuantityEvent.emit(this.item);
  }

  removeItem() {
    this.removeItemEvent.emit(this.item.cartId)
  }
}
