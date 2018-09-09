import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //product_name,price,producer_id,type_id
  listProduct;
  
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/listProduct').toPromise()
    .then(res => res.json())
    .then(resjson => this.listProduct = resjson)
  }
}
