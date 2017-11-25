import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserIndexComponent,
    MenuDisplayComponent,
    CheckoutComponent,
    CartComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
