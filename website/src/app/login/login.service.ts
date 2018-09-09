import { Injectable,OnInit} from '@angular/core';
import { Http ,Headers } from '@angular/http';
import {Account} from '../model/Account.Model'
import { Router } from '@angular/router';
import { DatasharingService } from 'src/app/datasharing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  
  headers= new Headers({
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + this.authService.token,
    });
    options = { headers: this.headers };
  constructor(
    private http:Http,
    private router:Router,
    private datasharing : DatasharingService
  ) { }
  ngOnInit() {

  }
  login(account:Account){
    let url = "http://localhost:8080/login";
    return this.http.post(url,account,this.options).toPromise()
    .then(res => res.json())
    .then(resjson => {
      this.router.navigateByUrl('/home');
      localStorage.setItem('token',resjson.token);
      localStorage.setItem('account',JSON.stringify(resjson.account));
      this.datasharing.setLogin(true);
    })
  }
  logout(){
    
  }

}
