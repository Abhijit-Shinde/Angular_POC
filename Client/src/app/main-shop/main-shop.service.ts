import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../shared/interfaces/category';
import { IPagination } from '../shared/interfaces/pagination';
import { IStore } from '../shared/interfaces/store';
import {map} from 'rxjs/operators';
import { IProduct } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MainShopService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(StoreId? : number, CategoryId? : number, sort?: string){
    let params = new HttpParams();

    if(StoreId){
      params = params.append('StrId',StoreId.toString());
    }
    if(CategoryId){
      params = params.append('CtrId',CategoryId.toString());
    }
    if(sort){
      params = params.append('sort',sort);
    }

    return this.http.get<IPagination>(this.baseUrl + 'products?pagesize=20',{observe: 'response',params})
      .pipe(map(response => {return response.body;}));
  }

  getCategory(){
    return this.http.get<ICategory[]>(this.baseUrl + 'products/category');
  }

  getStore(){
    return this.http.get<IStore[]>(this.baseUrl + 'products/store');
  }

  getProduct(id:number){
    return this.http.get<IProduct[]>(this.baseUrl + 'products/' + id);
  }
}
