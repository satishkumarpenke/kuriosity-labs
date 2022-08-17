import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count:any;
  constructor() { }

  ngOnInit(): void {
    let products:any = localStorage.getItem('cart');
    let cart_count =JSON.parse(products)
    this.count=cart_count.length;
  }


}
