import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MatNativeDateModule } from '@angular/material';
// import { checkServerIdentity } from 'tls';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ShopPageComponent,
    ShopItemComponent,
    CartPageComponent,
    CartItemComponent,
    CheckoutPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ShopPageComponent, pathMatch: 'full' },
      { path: 'cart', component: CartPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
    ]),
    BrowserAnimationsModule,
    MatStepperModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
