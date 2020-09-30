import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Observable} from "rxjs";
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  url="https://localhost:44346/api/product";
  allProducts: Object;
  selectedProduct: Product;
  isEdit=false;

  editProduct={
     name:'',
     barcode:'',
     IsActive:'',
     rate:'',
     buyingPrice:''
    };

  constructor(private product: ProductServiceService) { 
      this.product.getData().subscribe(data=>{
        console.log(data);
      });
  }

  ngOnInit(): void {
    this.getLatestProduct();
  }
  

  addProduct(formObj)
  {
    console.log('this is form object'+formObj);
    this.product.createProduct(formObj).subscribe((response)=>{
      this.getLatestProduct();
    });
  }

  getLatestProduct(){
    this.product.getData().subscribe((response)=>{
      this.allProducts = response;
    })
  }

  onEdit(product){
    this.isEdit=true;
    this.editProduct=product;
  }

  onDelete(product:Product)
  {
    this.product.deleteProduct(product).subscribe(()=>{
      this.getLatestProduct();
    });
  }

  onEditProduct(){
    this.isEdit=!this.isEdit;
    this.product.editProduct(this.editProduct).subscribe(()=>{
      this.getLatestProduct();
    });
  }
}
