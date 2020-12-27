import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartListService } from '../cart-list.service';
import { cartItem } from '../item-definitions';

@Component({
  selector: 'checkout-page',
  templateUrl: 'checkout-page.component.html',
  styleUrls: ['checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  cartList: cartItem[]
  selectedFile: File

  constructor(private _formBuilder: FormBuilder, private cartListService: CartListService) {
    cartListService.cartItemsObservable.subscribe(value => {
      this.cartList = value;
    })
    // this.regexp = new RegExp('^\d{3}-\d{3}-\d{3} \d{2}$');
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      personalData: ['', Validators.requiredTrue]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    // this.thirdFormGroup = this._formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   phone: ['', Validators.required],
    //   personalData: ['', Validators.required]
    // });
  }

  fileChange(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    console.log(this.selectedFile.name)
  }
}