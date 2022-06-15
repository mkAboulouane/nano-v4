import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";
import {AuthService} from "../../../../controller/service/Auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private authServicer: AuthService) { }

  ngOnInit(): void {
    this.online();
  }

  online(){
    console.log('service auth : '+this.authServicer.user);
     this.user = this.authServicer.user;
  }

}
