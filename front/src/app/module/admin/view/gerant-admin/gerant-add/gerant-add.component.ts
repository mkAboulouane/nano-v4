import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../controller/service/User.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../../controller/model/User.model";

@Component({
    selector: 'app-gerant-add',
    templateUrl: './gerant-add.component.html',
    styleUrls: ['./gerant-add.component.css']
})
export class GerantAddComponent implements OnInit {

    constructor(private  userService: UserService, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
    }

    submit() {
        this.userService.saveGerant(this.selectedUser);
    }


    get selectedUser(): User {
     return this.userService.user;
    }

    set selectedUser(value: User ) {
        this.userService.user = value;
    }



}
