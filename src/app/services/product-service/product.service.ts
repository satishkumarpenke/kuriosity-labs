import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public search$:Subject<any>=new Subject();

  search(data:any){
    this.search$.next(data)
  }
}