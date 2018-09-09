import { Injectable,OnInit } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Product } from 'src/app/model/Product.Model';
import { Account } from 'src/app/model/Account.Model';
import { Order } from 'src/app/model/Order.Model';
import { OrderDetail } from 'src/app/model/OrderDetail.Model';
import { DatasharingService } from 'src/app/datasharing.service';
import { Color } from 'src/app/model/Color.Model';


@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{
 
  constructor(
    private http:Http,
    private datasharing: DatasharingService
  ) { }
  ngOnInit(){

  }
  addProductToCart(productId,color,size,quantity,accountId){
    /*
    neu order khong ton tai thi tao order moi
    nguoc lai neu order da ton tai thi tim trong order có orderDetail nao co productId trung thi + 1 vao quantity
    nuoc lai neu khong co productId nao ton tai thi tao moi orderDetail
    */
    let orderLocalStorage =JSON.parse(localStorage.getItem('order'))as Order;
    if(orderLocalStorage == undefined){
      let order = new Order();
      order.account = JSON.parse(localStorage.getItem('account'));
      order.orderDate = new Date();
      let orderDetail = new OrderDetail();
      orderDetail.product = new Product();
      orderDetail.product.productId = productId;

      orderDetail.product.productColor = [];
      orderDetail.product.productColor.push(color);
      orderDetail.color = color;

      orderDetail.product.productSize = [];
      orderDetail.product.productSize.push(size);
      orderDetail.size = size;

      orderDetail.quantity = quantity;

      order.orderDetail = [];
      order.orderDetail.push(orderDetail);

      localStorage.setItem('order',JSON.stringify(order));
      this.datasharing.setCount(order.orderDetail.length);
    }else{
      /*
      neu product co cung productId, size va color thi cong quantity len 1
      neu product cung productId, cung size nhung khac color thì tao moi 1 orderDetail
      neu product cung productId, cung color nhung khac size thi tao moi 1 orderDetail
      neu product cung productId nhung khac size va color thi tao 1 orderDetail moi
      neu product khong ton tai thi tao moi 1 orderDetail
       */
      let exist = false;
      for(let i=0;i<orderLocalStorage.orderDetail.length;i++){
        if(orderLocalStorage.orderDetail[i].product.productId == productId){
          if(orderLocalStorage.orderDetail[i].product.productSize[0].sizeId == size.sizeId && orderLocalStorage.orderDetail[i].product.productColor[0].colorId == color.colorId){
            orderLocalStorage.orderDetail[i].quantity = orderLocalStorage.orderDetail[i].quantity + quantity;
            exist = true;
            break;
          }
        }
      }
      if(!exist){
        let orderDetail = new OrderDetail();
        orderDetail.product = new Product();
        orderDetail.product.productId = productId;
        orderDetail.product.productColor = [];
        orderDetail.product.productColor.push(color);
        orderDetail.color = color;

        orderDetail.product.productSize = [];
        orderDetail.product.productSize.push(size);
        orderDetail.size = size;

        orderDetail.quantity = quantity;
        orderLocalStorage.orderDetail.push(orderDetail);
        
      }
      
      localStorage.setItem('order',JSON.stringify(orderLocalStorage));
      this.datasharing.setCount(orderLocalStorage.orderDetail.length);
    }
    alert("Đã thêm vào giỏ hàng")
    
  }
  subtracProductToCart(productId){
    let orderLocalStorage =JSON.parse(localStorage.getItem('order'))as Order;
    let exist = false;
      for(let i=0;i<orderLocalStorage.orderDetail.length;i++){
        if(orderLocalStorage.orderDetail[i].product.productId == productId){
          if(orderLocalStorage.orderDetail[i].quantity > 1){
            orderLocalStorage.orderDetail[i].quantity = orderLocalStorage.orderDetail[i].quantity - 1;
            exist = true;
            break;
          }else{
            orderLocalStorage.orderDetail.splice(i,1);

            break;
          }
        }
      }
      localStorage.setItem('order',JSON.stringify(orderLocalStorage));
      this.datasharing.setCount(orderLocalStorage.orderDetail.length);
  }
  getOrder(account:Account){
    let orderLocalStorage =JSON.parse(localStorage.getItem('order'))as Order;
    let headers= new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
      });
    let options = {
       headers:headers 
    };
    console.log(orderLocalStorage)
    return this.http.post('http://localhost:8080/getOrder',orderLocalStorage,options).toPromise()
    .then(res => res.json())

  }
  
  deleteCartItem(productId){
    let orderLocalStorage =JSON.parse(localStorage.getItem('order'))as Order;
    for(let i=0;i<orderLocalStorage.orderDetail.length;i++){
      if(orderLocalStorage.orderDetail[i].product.productId == productId){
        orderLocalStorage.orderDetail.splice(i,1);
        break;
      }
    }
    localStorage.setItem('order',JSON.stringify(orderLocalStorage));
    this.datasharing.setCount(orderLocalStorage.orderDetail.length);
  }
  addOrder(){
    let orderLocalStorage =JSON.parse(localStorage.getItem('order'))as Order;
    let headers= new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
      });
    let options = {
       headers:headers 
    };
    return this.http.post('http://localhost:8080/addOrder',orderLocalStorage,options).toPromise()
    .then(res => res.json())
  }
}
