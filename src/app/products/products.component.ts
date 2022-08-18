import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public searchkey:any;

  products=[
    { id:'001',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women saree',
      price:'3500'
    },
    {
      id:'002',
      img:'/src/assets/categories/women/free-rajvadi.webp',
      name:'rajvadi saree',
      price:'910'
    },
    {
      id:'003',
      img:'/src/assets/categories/women/free-vasundhra.webp',
      name:'vasundhra saree',
      price:'1300'
    },
    {
      id:'004',
      img:'/src/assets/categories/women/l-2co-whs.webp',
      name:'T shirts',
      price:'1500'
    },
    {
      id:'005',
      img:'/src/assets/categories/women/l-ul.webp',
      name:'womens model dress',
      price:'2800'
    },
    {
      id:'006',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women slim saree',
      price:'18500'
    },
    {
      id:'007',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women designer saree',
      price:'1600'
    },
    {
      id:'008',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women hanloom saree',
      price:'1900'
    },
    {
      id:'009',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women cotton saree',
      price:'1400'
    },
    {
      id:'0101',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women red saree',
      price:'400'
    },
    {
      id:'0012',
      img:'/src/assets/categories/women/free-hitesh.webp',
      name:'women  green saree',
      price:'2400'
    },
  ]

  public cart:any =[]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.productService.search$.subscribe((res)=>{
      this.searchkey= res;
      console.log('search text',res)
    })
  }
  addToCart(product:any){
    alert(JSON.stringify(product))
      var cartStorage:any ={product}
    
    
  this.cart.push(cartStorage)
  console.log(this.cart)
  localStorage.setItem('cart',JSON.stringify(this.cart))

  }

  
}
