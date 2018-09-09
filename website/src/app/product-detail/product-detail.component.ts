import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/Product.Model';
import { Account } from 'src/app/model/Account.Model';
import { OrderService } from 'src/app/order.service';
import { log } from 'util';
import { Color } from 'src/app/model/Color.Model';
import { Size } from 'src/app/model/Size.Model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product = {} as Product;
  typeName;
  producerName;
  listColor = [];
  listSize = [];
  listImage = [];
  info;
  urlImage = '';
  colorSelected = {} as Color;
  sizeSelected = {} as Size;
  clickIndexColor;
  clickIndexSize;
  quantity = 1;
  account: Account;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: Http, private orderService: OrderService) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['productId'];
    });
    this.http.get('http://localhost:8080/getProduct/' + this.id).toPromise()
      .then(res => res.json())
      .then(resjson => {
        this.product = resjson;
        this.typeName = resjson.productType.typeName;
        this.producerName = resjson.producer.producerName;
        this.listColor = resjson.productColor;
        this.listSize = resjson.productSize;
        this.listImage = resjson.productImage;
        this.urlImage = resjson.productImage[0].productImage;

        this.colorSelected = this.listColor[0];
        this.sizeSelected = this.listSize[0];
      })
  }
  goToDetail() {
    this.router.navigate(['home'])
  }
  changeImage(imageUrl) {
    this.urlImage = imageUrl;
  }
  chonmau(colorId, index) {
    this.clickIndexColor = index;
    this.colorSelected = this.listColor.find(Color => Color.colorId == colorId);
  }
  getSelectedColor(index) {
    if (this.clickIndexColor == index) {
      return '1px solid #000';
    } else {
      return '1px solid #00000000';
    }
  }
  chonsize(sizeId, index) {
    this.clickIndexSize = index;
    this.sizeSelected = this.listSize.find(size => size.sizeId == sizeId);
  }
  getSelectedSize(index) {
    if (this.clickIndexSize == index) {
      return '3px solid #000';
    } else {
      return '3px solid #999';
    }
  }
  cong() {
    this.quantity = this.quantity + 1;
  }
  tru() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }
  order(productId) {
    this.account =  JSON.parse(localStorage.getItem('account'));
    if(this.account == undefined){
      this.router.navigateByUrl('/login?back=' + encodeURIComponent(`${this.router.url}`));
    }else{
      if(this.account){
        this.orderService.addProductToCart(productId,this.colorSelected,this.sizeSelected,this.quantity,this.account.accountId);
      }
    }
  }
}

