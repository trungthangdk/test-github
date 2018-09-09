import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-female-pants',
  templateUrl: './female-pants.component.html',
  styleUrls: ['./female-pants.component.css']
})
export class FemalePantsComponent implements OnInit {

  constructor(private http:Http) { }
  listProductFemalePants;
  ngOnInit() {
    this.http.get('http://localhost:8080/listProduct').toPromise()
    .then(res => res.json())
    .then(resjson => this.listProductFemalePants = resjson)
  }

}
