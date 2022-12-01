import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    
    {
      image: "assets/images/EspumanteDada.png",
      name: "Vino Dada",
      type: "Espumante",
      characteristic: "Blanco",
      price: 420,
      stock: 3,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/MalbecRutini.png",
      name: "Vino Rutini",
      type: "Malbec",
      characteristic: "Tinto",
      price: 420,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresStout.png",
      name: "Cerveza Antares",
      type: "Stout",
      characteristic: "Negra/tostada/cremosa",
      price: 270,
      stock: 30,
      clearance: true,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresScotch.png",
      name: "Cerveza  Antares",
      type: "Scotch",
      characteristic: "Rubia/maltosa",
      price: 210,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresKolsch.png",
      name: "Cerveza Antares",
      type: "Kolsch",
      characteristic: "Dorada/fresca/suave",
      price: 250,
      stock: 7,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresHoney.png",
      name: "Cerveza Antares",
      type: "Honey",
      characteristic: "Rubia",
      price: 200,
      stock: 1500,
      clearance: true,
      quantity: 0,
    },
  ]

  constructor(private cart: ProductCartService) { 
    
  }

  ngOnInit(): void {
  }

  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

}
