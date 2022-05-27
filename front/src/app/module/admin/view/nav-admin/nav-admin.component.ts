import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../controller/service/Auth.service";

@Component({
    selector: 'app-nav-admin',
    templateUrl: './nav-admin.component.html',
    styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }


    logOut() {
        this.authService.logout();
        console.log("Log Out Succesfully");
    }

    sidebarToggle() {

    }
}
