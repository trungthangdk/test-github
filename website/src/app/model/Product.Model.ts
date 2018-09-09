import { ProductType } from "../model/ProductType.Model";
import { Producer } from "../model/Producer.Model";
import { ProductImage } from "../model/ProductImage.Model";
import { Size } from "../model/Size.Model";
import { Color } from "../model/Color.Model";

export class Product{
    productId:string;
    productName:string;
    price:string;
    productType:ProductType;
    producer:Producer;
    productImage:ProductImage[];
    productSize:Size[];
    productColor:Color[];
}