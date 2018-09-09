import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-male-pants',
  templateUrl: './male-pants.component.html',
  styleUrls: ['./male-pants.component.css']
})
export class MalePantsComponent implements OnInit {

  constructor(private http:Http) { }
  listProductMalePants;
  ngOnInit() {
    this.http.get('http://localhost:8080/listProduct').toPromise()
    .then(res => res.json())
    .then(resjson => this.listProductMalePants = resjson)
  }

}
