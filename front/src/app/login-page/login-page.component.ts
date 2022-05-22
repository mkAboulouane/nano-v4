import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../controller/service/Auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  focus1: boolean;
  focus: boolean;


  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })


  // @Output() userAdded = new EventEmitter<string>();

  constructor(private router: Router, private authService: AuthService) { }

  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const password = formValues.password;
    this.authService.login(username,password);
  }

  register(){
    this.router.navigate(['/register'])
  }


}
