import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-woman-shirt',
  templateUrl: './woman-shirt.component.html',
  styleUrls: ['./woman-shirt.component.css']
})
export class WomanShirtComponent implements OnInit {

  constructor(private http:Http) { }
  listProductWomanShirt;
  ngOnInit() {
    this.http.get('http://localhost:8080/listProduct').toPromise()
    .then(res => res.json())
    .then(resjson => this.listProductWomanShirt = resjson)
  }

}
