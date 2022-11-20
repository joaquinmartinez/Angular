import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
