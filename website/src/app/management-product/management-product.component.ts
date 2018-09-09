import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { NgForm, NgModel } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

import { RouterLink } from '../../../node_modules/@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product.Model';
import { ProductType } from 'src/app/model/ProductType.Model';
import { Producer } from 'src/app/model/Producer.Model';
import { Color } from 'src/app/model/Color.Model';
import { Size } from 'src/app/model/Size.Model';
import { ProductImage } from 'src/app/model/ProductImage.Model';
@Component({
  selector: 'app-management-product',
  templateUrl: './management-product.component.html',
  styleUrls: ['./management-product.component.css']
})

export class ManagementProductComponent implements OnInit {
  headers = new Headers({
    'Content-Type': 'application/json',
  });
  options = { headers: this.headers };
  constructor(
    private product: Product,
    private http: Http,
    private productType: ProductType,

    private producer: Producer,
    private color: Color,
    private size: Size,
    private image: ProductImage,
    private router: Router

  ) { }

  listProduct;
  listProducer;
  listProductType;

  ngOnInit() {
    this.http.get('http://localhost:8080/listProduct').toPromise()
      .then(res => res.json())
      .then(resjson => this.listProduct = resjson)
    this.http.get('http://localhost:8080/listProducer').toPromise()
      .then(res => res.json())
      .then(resjson => this.listProducer = resjson)
    this.http.get('http://localhost:8080/listProductType').toPromise()
      .then(res => res.json())
      .then(resjson => this.listProductType = resjson)
  }

  displayBtn = false;
  displayForm = false;
  displayFormCreate() {
    this.displayForm = !this.displayForm;
    this.displayBtn = false;
  }

  displayButton() {
    this.displayBtn = !this.displayBtn;
  }

  selectedProducer;
  selectChangeProducer(event: any){
    this.selectedProducer = event.target.value;
    console.log(this.selectedProducer);
  }

  selectedProductType;
  selectChangeProductType(event: any){
    this.selectedProductType = event.target.value;
    console.log(this.selectedProductType);
  }


  //checkbox-color
  chkRED = false;
  chkBLUE = false;
  chkGREEN = false;
  chkPINK = false;
  chkBLACK = false;
  chkGRAY = false;

  clickRED(){
    this.chkRED =  !this.chkRED;
    console.log(this.chkRED);
  }

  clickBLUE(){
    this.chkBLUE =  !this.chkBLUE;
    console.log(this.chkBLUE);
  }

  clickGREEN(){
    this.chkGREEN =  !this.chkGREEN;
    console.log(this.chkGREEN);
  }

  clickPINK(){
    this.chkPINK =  !this.chkPINK;
    console.log(this.chkPINK);
  }

  clickBLACK(){
    this.chkBLACK =  !this.chkBLACK;
    console.log(this.chkBLACK);
  }

  clickGRAY(){
    this.chkGRAY =  !this.chkGRAY;
    console.log(this.chkGRAY);
  }

   //checkbox-size
   chkSizeX = false;
   chkSizeM = false;
   chkSizeL = false;
   chkSizeXL = false;
   chkSizeXXL = false;

   clickSizeX(){
     this.chkSizeX =  !this.chkSizeX;
     console.log(this.chkSizeX);
   }

   clickSizeM(){
     this.chkSizeM =  !this.chkSizeM;
     console.log(this.chkSizeM);
   }

   clickSizeL(){
     this.chkSizeL =  !this.chkSizeL;
     console.log(this.chkSizeL);
   }

   clickSizeXL(){
     this.chkSizeXL =  !this.chkSizeXL;
     console.log(this.chkSizeXL);
   }

   clickSizeXXL(){
     this.chkSizeXXL =  !this.chkSizeXXL;
     console.log(this.chkSizeXXL);
   }
   
   clickClearData(){
       this.typeIdUpdate = -1;
       this.producerIdUpdate = -1;
   }


  onSubmit(addProduct) {
    this.productType.typeId = this.selectedProductType;
    this.producer.producerId = this.selectedProducer;

    this.product.productName = addProduct.value.product;
    this.product.price = addProduct.value.price;
    this.product.productType = this.productType;
    this.product.producer = this.producer;
    this.product.productColor = [
      { colorId:0,productId: 1, color: "WHITE" }
    ]
    if(this.chkRED == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "RED"
      })
    }
    if(this.chkBLUE == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "BLUE"
      })
    }
    if(this.chkGREEN == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "GREEN"
      })
    }
    if(this.chkPINK == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "PINK"
      })
    }
    if(this.chkBLACK == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "BLACK"
      })
    }
    if(this.chkGRAY == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "GRAY"
      })
    }

    this.product.productSize = [
      { sizeId:0,productId: 1, size: "S" }
    ]
    if(this.chkSizeX == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "X"
      })
    } if(this.chkSizeM == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "M"
      })
    } if(this.chkSizeL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "L"
      })
    } if(this.chkSizeXL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "XL"
      })
    }
    if(this.chkSizeXXL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "XXL"
      })
    }
    this.product.productImage = [
      { imageId:0,productImage: addProduct.value.image,productId:1 }
    ]
    console.log(this.product)
    this.http.post('http://localhost:8080/createProduct', this.product, this.options)
      .toPromise()
      .then(res => res.json())
      .then(thongbao => alert("Thêm thành công sản phẩm " + this.product.productName))
      .then(load => this.ngOnInit())
      .catch(err => console.log(err));
  }

  clickDelete(id: Number) {
    const confirmDelete =  confirm("Bạn có chắc muốn xóa?");
    if(confirmDelete == true)
    {
    this.http.delete(`http://localhost:8080/deleteProduct/${id}`)
      .toPromise()
      .then(load => this.ngOnInit())
      // .then(result => {
      //   const index: number = this.listProduct.indexOf(id);
      //     this.listProduct.splice(index, 1);
      // })
    }
  }
  productNameUpdate;
  priceUpdate;
  typeUpdate;
  producerUpdate;
  colorUpdate;
  sizeUpdate;
  imageUpdate;
  productIdUpdate;
  getProduct;

  //FillCheckBoxColor
  fillRED = false;
  fillBLUE = false;
  fillGREEN = false;
  fillPINK = false;
  fillBLACK = false;
  fillGRAY = false;

  //fillCheckBoxSize
  fillSizeX = false;
  fillSizeM = false;
  fillSizeL = false;
  fillSizeXL = false;
  fillSizeXXL = false;
  typeIdUpdate;
  producerIdUpdate;

  clickFillData(id: Number) {
    this.http.get(`http://localhost:8080/product/${id}`).toPromise()
      .then(res => res.json())
      .then(resjson => {
        this.productNameUpdate = resjson.productName;
        this.priceUpdate = resjson.price;
        this.typeIdUpdate = resjson.productType.typeId;
        this.producerIdUpdate = resjson.producer.producerId;

        //checkBoxColor
        for(let i = 0 ; i < resjson.color.length; i++){
          if(resjson.color[i].color =="RED"){
            this.fillRED = true;
            this.chkRED = true;
          }
          if(resjson.color[i].color =="BLUE"){
            this.fillBLUE = true;
            this.chkBLUE = true;
          }
          if(resjson.color[i].color =="GREEN"){
            this.fillGREEN = true;
            this.chkGREEN = true;
          }
          if(resjson.color[i].color =="PINK"){
            this.fillPINK = true;
            this.chkPINK = true;
          }
          if(resjson.color[i].color =="BLACK"){
            this.fillBLACK = true;
            this.chkBLACK = true;
          }
          if(resjson.color[i].color =="GRAY"){
            this.fillGRAY = true;
            this.chkGRAY = true;
          }     
        }

        //checkBoxSize
        for(let i = 0; i < resjson.size.length; i++){
          if(resjson.size[i].size == "X  "){
            this.fillSizeX = true;
            this.chkSizeX = true;
          }
          if(resjson.size[i].size == "M  "){
            this.fillSizeM = true;
            this.chkSizeM = true;
          }
          if(resjson.size[i].size == "L  "){
            this.fillSizeL = true;
            this.chkSizeL = true;
          }
          if(resjson.size[i].size == "XL "){
            this.fillSizeXL = true;
            this.chkSizeXL = true;
          }
          if(resjson.size[i].size == "XXL"){
            this.fillSizeXXL = true;
            this.chkSizeXXL = true;
          }
        }
        if(this.displayForm == false){
          //FillCheckBoxColor
          this.fillRED = false;
          this.fillBLUE = false;
          this.fillGREEN = false;
          this.fillPINK = false;
          this.fillBLACK = false;
          this.fillGRAY = false;

          //fillCheckBoxSize
          this.fillSizeX = false;
          this.fillSizeM = false;
          this.fillSizeL = false;
          this.fillSizeXL = false;
          this.fillSizeXXL = false;
        }
        this.productIdUpdate = id;
      });
    this.displayFormCreate();
  }

  clickSave(id: Number, addProduct) {
    if( this.selectedProductType == null){
      this.productType.typeId = this.typeIdUpdate;
      console.log( this.productType.typeId);
    }
    if(this.selectedProducer == null){
      this.producer.producerId = this.producerIdUpdate;
      console.log(  this.producer.producerId );
    }
    
    this.product.productName = addProduct.value.product;
    this.product.price = addProduct.value.price;
    this.product.productType = this.productType;
    this.product.producer = this.producer;
    this.product.productColor = [
      { colorId:0,productId: 1, color: "WHITE" }
    ]
    if(this.chkRED == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "RED"
      })
    }
    if(this.chkBLUE == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "BLUE"
      })
    }
    if(this.chkGREEN == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "GREEN"
      })
    }
    if(this.chkPINK == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "PINK"
      })
    }
    if(this.chkBLACK == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "BLACK"
      })
    }
    if(this.chkGRAY == true)
    {
      this.product.productColor.push({
        colorId:0,productId: 1, color: "GRAY"
      })
    }

    this.product.productSize = [
      { sizeId:0,productId: 1, size: "S" }
    ]
    if(this.chkSizeX == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "X"
      })
    } if(this.chkSizeM == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "M"
      })
    } if(this.chkSizeL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "L"
      })
    } if(this.chkSizeXL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "XL"
      })
    }
    if(this.chkSizeXXL == true)
    {
      this.product.productSize.push({
        sizeId:0,productId: 1, size: "XXL"
      })
    }
    this.product.productImage = [
      { imageId:0,productImage: addProduct.value.image,productId:1 }
    ]

    this.http.put(`http://localhost:8080/update/${id}`, this.product, this.options)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson)
      .then(thongbao => alert("Cập nhật thành công"))
      .then(fillData => this.clickFillData(id))
      .then(load => this.ngOnInit())
      .catch(err => console.log(err));
      console.log(this.product);
  }
}
