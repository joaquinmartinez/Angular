import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = {
        "image": "assets/images/CervezaAntaresHoney.png",
        "name": "Cerveza",
        "type": "Honey",
        "characteristic": "Rubia",
        "price": 200,
        "stock": 1500
      }
  product2 = {
        "image": "assets/images/CervezaAntaresHoney.png",
        "name": "Cerveza",
        "type": "Scotch",
        "characteristic": "Rubia/maltosa",
        "price": 210,
        "stock": 2300
      }
  product3 = {
    "image": "assets/images/CervezaAntaresHoney.png",
    "name": "Cerveza",
    "type": "Kolsch",
    "characteristic": "Dorada/fresca/suave",
    "price": 250,
    "stock": 1900
  }
  product4 = {
    "image": "assets/images/CervezaAntaresHoney.png",
    "name": "Cerveza",
    "type": "Stout",
    "characteristic": "Negra/tostada/cremosa",
    "price": 270,
    "stock": 3000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
