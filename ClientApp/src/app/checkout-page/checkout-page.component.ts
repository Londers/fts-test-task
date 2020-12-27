import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartListService } from '../cart-list.service';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'checkout-page',
  templateUrl: 'checkout-page.component.html',
  styleUrls: ['checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  thirdFormGroup: FormGroup
  cartList: cartItem[]
  selectedDeliveryMethod = 'pickup'
  selectedCity = 'moscow'
  personalDataAgreement = true
  imageDisplay: string | ArrayBuffer;
  userData: {}

  constructor(private _formBuilder: FormBuilder, private cartListService: CartListService) {
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
  }

  onFileSelect(event: File[]) {
    const reader = new FileReader();
    reader.readAsDataURL(event[0]);
    reader.onload = () =>
      this.imageDisplay = reader.result;
    console.log(this.imageDisplay)
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

  testData() {
    let obj = {
      ...this.firstFormGroup.value,
      deliveryMethod: this.deliverySelect,
      snils: this.secondFormGroup.get('snils').value,
      userPhoto: this.imageDisplay,
    }
    this.userData = (this.selectedDeliveryMethod === 'delivery') ? { ...obj, ...this.thirdFormGroup.value } : { ...obj, city: 'moscow' }
  }
} 