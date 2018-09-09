import { Product } from "src/app/model/Product.Model";
import { Color } from "src/app/model/Color.Model";
import { Size } from "src/app/model/Size.Model";

export class OrderDetail{
    orderDetailId:string;
    orderId:string;
    product:Product;
    color:Color;
    size:Size;
    quantity:number;
    total:number;
}