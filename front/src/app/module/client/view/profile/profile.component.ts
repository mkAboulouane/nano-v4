import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../controller/service/User.service";
import {User} from "../../../../controller/model/User.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.online();
  }

  online(){
    this.userService.currentUser().subscribe( data => {
      this.user = data;
      console.log(data);
    },error => console.log(error));
  }

}
