import { Injectable,OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http:Http) { }
  ngOnInit() {

  }
  getAllProduct(){
    return this.http.get('http://localhost:8080/listProduct').toPromise()
    .then(res => res.json())
    .then(resjson => resjson)
    .catch(err => console.log("error connect to server"));
  }
}
