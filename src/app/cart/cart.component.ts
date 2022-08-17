import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public Cart_products:any;

  constructor() { }

  ngOnInit(): void {
    let products:any = localStorage.getItem('cart');
    this.Cart_products =JSON.parse(products)
    console.log(this.Cart_products)
    let d=this.Cart_products.length
    console.log('sdfsdfs',d)
    // console.log(JSON.parse(this.Cart_products))
    return this.Cart_products || [];
   
  }


}
