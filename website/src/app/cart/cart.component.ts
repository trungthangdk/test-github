import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service'
import {Account} from '../model/Account.Model'
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/Order.Model';
import { DatasharingService } from 'src/app/datasharing.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[OrderService]
})
export class CartComponent implements OnInit {
  isNull = true;
  products = []
  constructor(
    private orderService:OrderService,
    private http:Http,
    private router:Router,
    private datasharing : DatasharingService
  ) {}

  ngOnInit() {
    let account = JSON.parse(localStorage.getItem('account'))as Account;
    if(account == undefined){
      this.router.navigateByUrl('/login?back='+this.router.url)
    }else{
      this.orderService.getOrder(account)
      .then(resjson =>{
        for(let i=0;i<resjson.orderDetail.length;i++){
          this.products.push({
            productId:resjson.orderDetail[i].product.productId,
            productName:resjson.orderDetail[i].product.productName,
            productImage:resjson.orderDetail[i].product.productImage.length > 0 ?resjson.orderDetail[i].product.productImage[0].productImage:'',
            size:resjson.orderDetail[i].size.size,
            color:resjson.orderDetail[i].color.color,
            producerName:resjson.orderDetail[i].product.producer.producerName,
            price:resjson.orderDetail[i].product.price,
            quantity:resjson.orderDetail[i].quantity,
            total:resjson.orderDetail[i].product.price*resjson.orderDetail[i].quantity
          });
        }
        if(this.products.length > 0){
          this.isNull = false;
        }
      })
      .catch(err => console.log(err))
      
    }
    
  }
  deleteCartItem(product){
    this.orderService.deleteCartItem(product.productId);
    this.products.splice(this.products.indexOf(product),1);
  }
  addOrder(){
    let orderCurrent =JSON.parse(localStorage.getItem('order'))as Order;
    for(let i=0;i<orderCurrent.orderDetail.length;i++){
      for(let j=0;j<this.products.length;j++){
        if(orderCurrent.orderDetail[i].product.productId == this.products[j].productId){
          orderCurrent.orderDetail[i].quantity = this.products[j].quantity;
        }
      }
    }
    localStorage.setItem('order',JSON.stringify(orderCurrent));
    this.orderService.addOrder()
    .then(resjson => {
      alert("Đặt hàng thành công")
      localStorage.removeItem('order');
      this.datasharing.setCount(0);
      this.router.navigateByUrl("/home");
    })
    .catch(err=>console.log(err))
  }

}
