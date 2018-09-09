import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../product.service'
import {OrderService} from '../order.service'
import {Account} from '../model/Account.Model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-menshirt',
  templateUrl: './menshirt.component.html',
  styleUrls: ['./menshirt.component.css'],
  providers:[ProductService,OrderService]

})
export class MenshirtComponent implements OnInit {
  name = '';
  products = []
  producers = []
  constructor(
    private productService:ProductService,
    private orderService:OrderService,
    private account:Account,
    private router: Router
    ) { }

  ngOnInit() {
    this.productService.getAllProduct()
    .then(resJson => {
      for(let i=0;i<resJson.length;i++){
        this.products.push({
          productId:resJson[i].productId,
          productName:resJson[i].productName,
          producerName:resJson[i].producer.producerName,
          productImage:resJson[i].productImage.length > 0 ? resJson[i].productImage[0].productImage : '',
          price:resJson[i].price
        });
      }
    })
  }
  
  productDetail(productId){
    this.router.navigateByUrl('/productDetail?productId='+productId)
  }
  
}
