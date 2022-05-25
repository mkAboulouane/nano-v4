import {Component, OnInit} from '@angular/core';
import {User} from "../../../../../controller/model/User.model";
import {UserService} from "../../../../../controller/service/User.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.findAll();
        this.users;
    }

    delete(user: any) {

    }

    get users(): Array<User>{
        return this.userService.users;
    }

    add() {
        this.router.navigate(['/add-user'])
    }
}
