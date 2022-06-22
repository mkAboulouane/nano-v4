import {Component, ElementRef, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {AuthService} from "../../../../controller/service/Auth.service";
import {NotificationService} from "../../../../controller/service/notification.service";
import {Notification} from "../../../../controller/model/notification.model";
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";

@Component({
    selector: 'app-nav-client',
    templateUrl: './nav-client.component.html',
    styleUrls: ['./nav-client.component.scss']
})
export class NavClientComponent implements OnInit {
    private toggleButton: any;
    key = 0;
    notifications: Notification[] = [];
    user = new User();
    private sidebarVisible: boolean;

    constructor(public location: Location, private element: ElementRef, private userService: UserService
                , private authService: AuthService , private notificationService: NotificationService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
       this.online();
    }


    online(){
        this.userService.currentUser().subscribe(
            data => {
                this.user = data;
                this.notification(this.user.id);
            },error => console.log(error)

        )
    }

    notification(id: number){

        this.notificationService.findByUserId(id).subscribe(
            data => {
                this.notifications = data;
                this.notSeen = 0;
                this.notifications.forEach(e=>{
                    if (!e.seen) {
                        this.notSeen++;
                    }
                });
                this.key = this.notSeen;
            },error => console.log(error)
        )
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

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        // if(titlee.charAt(0) === '#'){
        //     titlee = titlee.slice( 1 );
        // }
        if (titlee === '/home') {
            return true;
        } else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        } else {
            return false;
        }
    }

    isindex() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/home';
    }

    islogin() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/login';
    }

    isMateriel() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/produitbio';
    }

    isRegister() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/register';
    }

    isCheckout() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/checkout';
    }

    isPanier() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/panier';
    }

    isFormation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/formation';
    }

    isCongres() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/congres';
    }

    isOverseaeducation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        return titlee === '/overseaseducation';
    }

    logOut() {
        let confirm = window.confirm('Vous voulez Vraiment se deconecter')
    if(confirm) {
        this.authService.logout();
        console.log("Log Out Succesfully");
    }
    }

    get notSeen(): number   {
        return this.userService.notSeen;
    }

    set notSeen(value: number){
        this.userService.notSeen = value;
    }



}
