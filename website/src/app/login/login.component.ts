import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service'
import { Account } from '../model/Account.Model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isLogin = false;
  errorLogin = false;
  constructor(
    private loginService: LoginService,
    private account:Account,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  submit(formSignIn){
    if(formSignIn.controls.username.valid && formSignIn.controls.password.valid){
    this.account.userName = formSignIn.value.username;
    this.account.password = formSignIn.value.password;
    this.loginService.login(this.account)
    .then(res => {
      this.route.queryParams.subscribe(params => {
        this.router.navigateByUrl(params['back']);
    });
      
    })
    .catch((error: HttpHeaderResponse) => {
      console.log("error: "+error)
      if(error.status == 400){
        this.errorLogin = true
      }
    })
  }
  }
  reset(){
    var dirtyFormID = 'register';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
  }
  register(formRegister){
    console.log(formRegister)
  }

}
