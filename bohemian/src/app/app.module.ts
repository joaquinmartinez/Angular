import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

import { FormsModule } from '@angular/forms';
import { BohemianContactComponent } from './bohemian-contact/bohemian-contact.component';
import { BohemianProductsComponent } from './bohemian-products/bohemian-products.component';
import { BohemianSucursalesComponent } from './bohemian-sucursales/bohemian-sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CarritoComprasComponent,
    BohemianContactComponent,
    BohemianProductsComponent,
    BohemianSucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
