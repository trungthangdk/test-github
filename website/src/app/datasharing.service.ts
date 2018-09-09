import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Order } from 'src/app/model/Order.Model';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  // private datesharingSource = new BehaviorSubject<Order>(undefined);
  // order = this.datesharingSource.asObservable();

  private datasharingCountCart = new BehaviorSubject(0);
  count = this.datasharingCountCart.asObservable();

  private datasharingLogin = new BehaviorSubject(false);
  login = this.datasharingLogin.asObservable();
  constructor(
    
  ) { }
  // setOrder(order : Order){
  //   this.datesharingSource.next(order);
  // }
  setCount(num: number){
    this.datasharingCountCart.next(num);
  }
  setLogin(boolean:boolean){
    this.datasharingLogin.next(boolean);
  }
}
