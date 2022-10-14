import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message = "";

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {

    this.router.navigate(["admin/dashboard"]);

    // if( this.formGroupLogin.valid ) {
    //   this.loginService.postLogin(this.formGroupLogin.value).subscribe(
    //     // next
    //     (response) => {
    //       alert("success");
    //       alert(JSON.stringify(response));
    //     },
    //     (error) => {

    //       this.message = error.error.message;

    //     }
    //   );
    // }else {
    //   alert('Form Not Valid');
    // }

  }

}
