import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

/** Maneja la logica del carrito de compras*/
@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private _cartListProducts: Product[] = [];
  cartListProducts: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartListProducts);

  constructor() { }
  addToCart(product: Product) {
    let item: Product = this._cartListProducts.find((v1) => v1.name == product.name)!; //find busca elementos comparando el valor con el name
    if(!item){
      this._cartListProducts.push({ ... product}); //clona el objeto
    }else {
      item.quantity += product.quantity;
    }
    console.log(this._cartListProducts);
    this.cartListProducts.next(this._cartListProducts); //Actualizo valor //Equivale al emitt de eventos
  }

}
