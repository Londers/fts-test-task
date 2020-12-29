import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartListService } from '../cart-list.service';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'order-page',
  templateUrl: 'order-page.component.html',
  styleUrls: ['order-page.component.css']
})
export class orderPageComponent implements OnInit {

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  cartList: cartItem[]
  selectedDeliveryMethod = 'pickup'
  selectedCity = 'moscow'
  personalDataAgreement = true
  imageDisplay: string | ArrayBuffer
  userData: {}
  orderNumber: Object

  constructor(private http: HttpClient, private _formBuilder: FormBuilder, private cartListService: CartListService) {
    cartListService.cartItemsObservable.subscribe(value => {
      this.cartList = value;
    })
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      patronymic: ['', Validators.required],
      phone: ['', Validators.required],
      personalData: ['', Validators.requiredTrue]
    });
    this.secondFormGroup = this._formBuilder.group({
      snils: ['', Validators.required],
      userPhoto: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      postcode: ['', Validators.required],
    });
    if (this.cartList.length === 0) window.location.href = '/'
  }

  getCartSum() {
    let sum = 0
    this.cartList.forEach((item, index) => sum += (item.quantity * item.shopItem.price))
    return sum;
  }

  clearCart(): void {
    this.cartListService.clearCart();
  }

  onFileSelect(event: File[]) {
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = () =>
      this.imageDisplay = reader.result;
  }

  deliverySelect(value: string): void {
    this.selectedDeliveryMethod = value
  }

  citySelect(value: string): void {
    this.selectedCity = value
  }

  personalDataCheck(): void {
    this.personalDataAgreement = this.firstFormGroup.get('personalData').valid
  }

  getData() {
    let obj = {
      ...this.firstFormGroup.value,
      deliveryMethod: this.deliverySelect,
      snils: this.secondFormGroup.get('snils').value,
      userPhoto: this.imageDisplay,
      order: this.cartListService.getCartList(),
    }
    this.userData = (this.selectedDeliveryMethod === 'delivery') ? { ...obj, ...this.thirdFormGroup.value } : { ...obj, city: 'moscow' }
  }

  finishOrder() {
    this.http.post('https://localhost:5001/shopitem/UserData', JSON.stringify(this.userData)).subscribe(result => {
      this.clearCart()
      this.orderNumber = result
    }, error => console.error(error));
  }

  returnToMainPage() {
    window.location.href = '/'
  }
} 