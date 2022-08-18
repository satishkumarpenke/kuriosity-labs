import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count:any;
  inputText:String='';
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    let products:any = localStorage.getItem('cart');
    let cart_count =JSON.parse(products)
    this.count=cart_count.length;

  }
  mySearch(event:any){
    this.inputText = (event.target as HTMLInputElement).value
    console.log(this.inputText);
    this.productService.search(this.inputText)
  }


}
