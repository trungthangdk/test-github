import { OrderDetail } from "../model/OrderDetail.Model";

export class Order{
    orderId:string;
    account:Account;
    orderDate:Date;
    orderDetail:OrderDetail[];
}