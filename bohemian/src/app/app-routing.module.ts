import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BohemianProductsComponent } from './bohemian-products/bohemian-products.component';
import { BohemianContactComponent } from './bohemian-contact/bohemian-contact.component';
import { BohemianSucursalesComponent } from './bohemian-sucursales/bohemian-sucursales.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: BohemianProductsComponent
  },
  {
    path: 'contact',
    component: BohemianContactComponent
  },
  {
    path: 'sucursales',
    component: BohemianSucursalesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }