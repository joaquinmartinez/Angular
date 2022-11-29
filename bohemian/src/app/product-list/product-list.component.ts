import { Component, OnInit } from '@angular/core';
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
      name: "Vino",
      type: "Espumante",
      characteristic: "Blanco",
      price: 420,
      stock: 3,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/MalbecRutini.png",
      name: "Vino",
      type: "Malbec",
      characteristic: "Tinto",
      price: 420,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresStout.png",
      name: "Cerveza",
      type: "Stout",
      characteristic: "Negra/tostada/cremosa",
      price: 270,
      stock: 30,
      clearance: true,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresScotch.png",
      name: "Cerveza",
      type: "Scotch",
      characteristic: "Rubia/maltosa",
      price: 210,
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresKolsch.png",
      name: "Cerveza",
      type: "Kolsch",
      characteristic: "Dorada/fresca/suave",
      price: 250,
      stock: 7,
      clearance: false,
      quantity: 0,
    },
    {
      image: "assets/images/CervezaAntaresHoney.png",
      name: "Cerveza",
      type: "Honey",
      characteristic: "Rubia",
      price: 200,
      stock: 1500,
      clearance: true,
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  downQuantity(product: Product): void{
    if(product.quantity > 0) 
      product.quantity--;
 }

  upQuantity(product: Product): void{
     if(product.quantity < product.stock) 
      product.quantity++;
  }

  changeQuantity(event: Event, product: Product): void{
    
  }

}
