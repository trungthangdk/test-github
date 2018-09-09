import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order.Model';
import { DatasharingService } from 'src/app/datasharing.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  order;
  login = false;
  accountCurrent;
  constructor(
    private datasharing:DatasharingService,
    private router:Router
  ) { }

  ngOnInit() {
    this.datasharing.count.subscribe(res => {
      let orderCurren =  JSON.parse(localStorage.getItem('order'))as Order;
      if(orderCurren == undefined){
        this.order = 0;
      }else{
        this.order = orderCurren.orderDetail.length;
      }
    } );

    this.datasharing.login.subscribe(res => {
      let accountCurrent = JSON.parse(localStorage.getItem('account'))as Account;
      if(accountCurrent == undefined){
        this.login = false;
      }else{
        this.login = true;
      }
    });
  }
  logout(){
    localStorage.removeItem('account');
    localStorage.removeItem('order');
    this.datasharing.setLogin(false);
    this.datasharing.setCount(0);
    this.router.navigateByUrl('/home');
  }

}
