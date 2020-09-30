import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product/product';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 
  url:string = "https://localhost:44369/api/product";

  constructor(private http:HttpClient) { }

  // getData()
  // {
  //   let url:string = "https://localhost:44346/api/product";
  //   return this.http.get(url);
  // }

  createProduct(product){
    return this.http.post(this.url,product);
  }

    getData():Observable<Product[]>
    {
      return this.http.get<Product[]>(this.url).pipe(
        tap(data=>console.log(data))
      )
    }

    deleteProduct(product: Product) {      
      return this.http.delete('https://localhost:44369/api/product/'+ product.id);      
    }

    editProduct(product){
      return this.http.put('https://localhost:44369/api/product/'+product.id,product);
    }
}
