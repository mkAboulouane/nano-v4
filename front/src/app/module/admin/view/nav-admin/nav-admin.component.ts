import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from "../../../../controller/service/Auth.service";
import {Location} from "@angular/common";

@Component({
    selector: 'app-nav-admin',
    templateUrl: './nav-admin.component.html',
    styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    constructor(private authService: AuthService,public location: Location, private element: ElementRef) {        this.sidebarVisible = false;

    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };



    logOut() {
        this.authService.logout();
        console.log("Log Out Succesfully");
    }


}
