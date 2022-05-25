import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../controller/service/User.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../../controller/model/User.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-gerant-add',
    templateUrl: './gerant-add.component.html',
    styleUrls: ['./gerant-add.component.css']
})
export class GerantAddComponent implements OnInit {

    constructor(private router: Router, private  userService: UserService, private httpClient: HttpClient) {
    }

    ngOnInit(): void {
    }

    submit() {
        this.userService.saveGerant(this.selectedUser);
        this.router.navigate(['/admin/gerant'])
    }


    get selectedUser(): User {
     return this.userService.selectedUser;
    }

    set selectedUser(value: User ) {
        this.userService.selectedUser = value;
    }



}
