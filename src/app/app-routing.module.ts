import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuDisplayComponent} from './menu-display/menu-display.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { OrderComponent } from './order/order.component';
import {AppComponent} from './app.component';
import { Component } from '@angular/core/src/metadata/directives';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

const routes: Routes = [
  {
    path : 'menu-display',
    component : MenuDisplayComponent
  },
  {
    path : '',
    component : UserIndexComponent
  },
  {
    path : 'cart',
    component : CartComponent
  },
  {
    path : 'checkout',
    component : CheckoutComponent
  },
  {
    path : 'qrcode',
    component : QrcodeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
