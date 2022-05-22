import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../controller/service/Auth.service';
import {Role} from '../controller/model/Role.model';
import {User} from '../controller/model/User.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        username: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    submit() {
        const formValues = this.registerForm.value;
        const {phone, username, password, email} = formValues;
        this.user.username = username;
        this.user.phone = phone;
        this.user.password = password;
        this.user.email = email;
        this.authService.register();
    }

    get user(): User {
        return this.authService.user;
    }

    set user(value: User) {
        this.authService.user = value;
    }


}
