import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../controller/service/Auth.service';
import {User} from '../controller/model/User.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // private _showWarrning: boolean;
    registerForm = new FormGroup({
        username: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
    });

    constructor(private authService: AuthService) {
    }

    // checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    //     let pass = password.value;
    //     let confirmPass = group.get('confirmPassword').value
    //     return pass === confirmPass ? null : { notSame: true }
    // }

    get user(): User {
        return this.authService.user;
    }

    set user(value: User) {
        this.authService.user = value;
    }

    ngOnInit(): void {
    }

    submit() {
        const formValues = this.registerForm.value;
        const {phone, username, password, email, confirmPassword} = formValues;
        this.user.username = username;
        this.user.phone = phone;
        this.user.password = password;
        this.user.email = email;
        if(password === confirmPassword) {
            this.authService.register();
        }else {
            // this.showWarrning = true;
            window.alert('password did not match');
        }

    }


}
